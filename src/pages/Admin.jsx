import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Edit2, Plus, Save, X, Users, Upload, Mail, Eye, Clock, Lock, LogOut } from 'lucide-react';

const API_URL = '/api';

const Admin = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    picture: '',
    category: 'core',
    order: 0
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('team');
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  // Check auth status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTeamMembers();
      fetchMessages();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/check`, { credentials: 'include' });
      if (res.ok) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(loginData)
      });
      
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        // If response is not JSON (e.g. 504 Gateway Timeout HTML), throw error
        const text = await res.text();
        console.error("Non-JSON response:", text);
        throw new Error(`Server returned ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setLoginError(`${data.message || 'Login failed'}${data.details ? ` (${data.details})` : ''}`);
      }
    } catch (error) {
      setLoginError(`Connection error: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, { method: 'POST', credentials: 'include' });
      setIsAuthenticated(false);
      setLoginData({ username: '', password: '' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch(`${API_URL}/team`);
      const data = await res.json();
      setTeamMembers(data);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${API_URL}/messages`);
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setMessagesLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await fetch(`${API_URL}/messages/${id}/read`, { method: 'PUT' });
      fetchMessages();
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    try {
      await fetch(`${API_URL}/messages/${id}`, { method: 'DELETE' });
      fetchMessages();
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString();
  };

  const getHeardFromLabel = (val) => {
    const labels = { google: 'Google Search', social_media: 'Social Media', referral: 'Referral', advertisement: 'Advertisement', other: 'Other' };
    return labels[val] || val;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', role: '', picture: '', category: 'core', order: 0 });
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setEditingId(null);
    setShowForm(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, picture: '' })); // Clear URL if file selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('role', formData.role);
      submitData.append('category', formData.category);
      submitData.append('order', formData.order);

      if (imageFile) {
        submitData.append('image', imageFile);
      } else if (formData.picture) {
        submitData.append('picture', formData.picture);
      }

      if (editingId) {
        await fetch(`${API_URL}/team/${editingId}`, {
          method: 'PUT',
          body: submitData
        });
      } else {
        await fetch(`${API_URL}/team`, {
          method: 'POST',
          body: submitData
        });
      }
      fetchTeamMembers();
      resetForm();
    } catch (error) {
      console.error('Error saving member:', error);
    }
  };

  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      role: member.role,
      picture: member.picture || '',
      category: member.category,
      order: member.order || 0
    });
    setImageFile(null);
    setImagePreview(member.picture ? (member.picture.startsWith('/uploads') ? member.picture : member.picture) : null);
    setEditingId(member._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) return;
    try {
      await fetch(`${API_URL}/team/${id}`, { method: 'DELETE' });
      fetchTeamMembers();
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  const getCategoryLabel = (cat) => {
    const labels = { leadership: 'Leadership', core: 'Core Team', support: 'Support Team' };
    return labels[cat] || cat;
  };

  return (
    <div className="admin-page">
      {authLoading ? (
        <div className="loading-screen">
          <div className="loading">Checking authentication...</div>
        </div>
      ) : !isAuthenticated ? (
        // Login Form
        <div className="login-container" style={{
          minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="feature-card" style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
            <div className="login-header" style={{ marginBottom: '2rem' }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-bg-darker)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                <Lock size={32} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Admin Portal</h1>
              <p style={{ color: 'var(--color-text-muted)' }}>Secure Access Only</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label>Username</label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label>Password</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </div>
              {loginError && <div className="login-error" style={{ color: '#ef4444', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>{loginError}</div>}
              <button type="submit" className="btn btn-primary btn-full">Access Dashboard</button>
            </form>
          </div>
        </div>
      ) : (
        // Admin Dashboard
        <div className="admin-container">
          {/* Logout Button */}
          <div className="admin-top-bar">
            <button className="btn btn-logout" onClick={handleLogout}>
              <LogOut size={18} /> Logout
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="admin-tabs">
            <button
              className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              <Users size={20} /> Team
            </button>
            <button
              className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <Mail size={20} /> Messages
              {messages.filter(m => !m.read).length > 0 && (
                <span className="badge-count">{messages.filter(m => !m.read).length}</span>
              )}
            </button>
          </div>

          {activeTab === 'team' && (
            <>
              <header className="admin-header">
                <h1><Users size={32} /> Team Management</h1>
                <button className="btn btn-primary" onClick={() => setShowForm(true)}>
                  <Plus size={20} /> Add Member
                </button>
              </header>

              {/* Form Modal */}
              {showForm && (
                <div className="modal-overlay">
                  <div className="modal">
                    <div className="modal-header">
                      <h2>{editingId ? 'Edit Team Member' : 'Add Team Member'}</h2>
                      <button className="close-btn" onClick={resetForm}><X size={24} /></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Role *</label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. CEO, Developer, Designer"
                        />
                      </div>
                      <div className="form-group">
                        <label>Profile Picture</label>
                        <div className="upload-section">
                          {imagePreview && (
                            <div className="image-preview">
                              <img src={imagePreview} alt="Preview" />
                            </div>
                          )}
                          <div className="upload-options">
                            <div className="file-upload">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                id="imageUpload"
                                style={{ display: 'none' }}
                              />
                              <label htmlFor="imageUpload" className="btn btn-secondary upload-btn">
                                <Upload size={18} /> Upload Image
                              </label>
                            </div>
                            <span className="or-divider">OR</span>
                            <input
                              type="url"
                              name="picture"
                              value={formData.picture}
                              onChange={(e) => {
                                handleInputChange(e);
                                setImageFile(null);
                                setImagePreview(e.target.value);
                                if (fileInputRef.current) fileInputRef.current.value = '';
                              }}
                              placeholder="https://example.com/photo.jpg"
                              disabled={!!imageFile}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Category *</label>
                          <select name="category" value={formData.category} onChange={handleInputChange}>
                            <option value="leadership">Leadership (Top)</option>
                            <option value="core">Core Team (Middle)</option>
                            <option value="support">Support Team (Bottom)</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Order (within category)</label>
                          <input
                            type="number"
                            name="order"
                            value={formData.order}
                            onChange={handleInputChange}
                            min="0"
                            placeholder="0"
                          />
                        </div>
                      </div>
                      <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>
                        <button type="submit" className="btn btn-primary">
                          <Save size={18} /> {editingId ? 'Update' : 'Add'} Member
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Team List */}
              <div className="team-list">
                {loading ? (
                  <div className="loading">Loading team members...</div>
                ) : teamMembers.length === 0 ? (
                  <div className="empty-state">
                    <Users size={64} />
                    <h3>No Team Members Yet</h3>
                    <p>Click "Add Member" to add your first team member.</p>
                  </div>
                ) : (
                  <table className="team-table">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Category</th>
                        <th>Order</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map(member => (
                        <tr key={member._id}>
                          <td>
                            <div className="table-avatar">
                              {member.picture ? (
                                <img src={member.picture.startsWith('/uploads') ? member.picture : member.picture} alt={member.name} />
                              ) : (
                                <Users size={24} />
                              )}
                            </div>
                          </td>
                          <td>{member.name}</td>
                          <td>{member.role}</td>
                          <td><span className={`badge ${member.category}`}>{getCategoryLabel(member.category)}</span></td>
                          <td>{member.order}</td>
                          <td>
                            <div className="action-btns">
                              <button className="icon-btn edit" onClick={() => handleEdit(member)} title="Edit">
                                <Edit2 size={18} />
                              </button>
                              <button className="icon-btn delete" onClick={() => handleDelete(member._id)} title="Delete">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}

          {activeTab === 'messages' && (
            <>
              <header className="admin-header">
                <h1><Mail size={32} /> Messages</h1>
              </header>

              <div className="messages-list">
                {messagesLoading ? (
                  <div className="loading">Loading messages...</div>
                ) : messages.length === 0 ? (
                  <div className="empty-state">
                    <Mail size={64} />
                    <h3>No Messages Yet</h3>
                    <p>Messages from the contact form will appear here.</p>
                  </div>
                ) : (
                  messages.map(msg => (
                    <div key={msg._id} className={`message-card ${msg.read ? '' : 'unread'}`}>
                      <div className="message-header">
                        <div className="sender-info">
                          <h3>{msg.firstName} {msg.lastName}</h3>
                          <a href={`mailto:${msg.email}`}>{msg.email}</a>
                          {msg.phone && <span className="phone">{msg.phone}</span>}
                        </div>
                        <div className="message-meta">
                          <span className="date"><Clock size={14} /> {formatDate(msg.createdAt)}</span>
                          <span className="heard-from">via {getHeardFromLabel(msg.heardFrom)}</span>
                        </div>
                      </div>
                      <p className="message-body">{msg.message}</p>
                      <div className="message-actions">
                        {!msg.read && (
                          <button className="icon-btn read" onClick={() => markAsRead(msg._id)} title="Mark as Read">
                            <Eye size={18} />
                          </button>
                        )}
                        <button className="icon-btn delete" onClick={() => deleteMessage(msg._id)} title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        .admin-page {
          min-height: 100vh;
          background: var(--color-bg-light);
          padding: 2rem;
        }

        .loading-screen {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
        }

        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }

        .login-card {
          background: white;
          border-radius: 16px;
          padding: 3rem;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-header svg {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .login-header h1 {
          color: var(--color-navy);
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .login-header p {
          color: #666;
          font-size: 0.95rem;
        }

        .login-error {
          background: #fee2e2;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          text-align: center;
        }

        .btn-full {
          width: 100%;
        }

        .credentials-hint {
          margin-top: 1.5rem;
          padding: 1rem;
          background: #eff6ff;
          border-radius: 8px;
          font-size: 0.85rem;
          color: #1e40af;
          text-align: center;
        }

        .credentials-hint code {
          background: white;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .admin-top-bar {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 1rem;
        }

        .btn-logout {
          background: #fee2e2;
          color: #dc2626;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .btn-logout:hover {
          background: #dc2626;
          color: white;
        }

        .admin-container {
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
          background: var(--color-bg-light);
          padding: 2rem;
        }

        .admin-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .admin-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          color: #666;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.2s;
        }

        .tab-btn:hover {
          color: var(--color-primary);
        }

        .tab-btn.active {
          background: var(--color-primary);
          color: white;
        }

        .badge-count {
          background: #dc2626;
          color: white;
          font-size: 0.75rem;
          padding: 0.15rem 0.5rem;
          border-radius: 10px;
          margin-left: 0.25rem;
        }

        .messages-list {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        .message-card {
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .message-card:last-child {
          border-bottom: none;
        }

        .message-card.unread {
          background: #eff6ff;
          border-left: 4px solid var(--color-primary);
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .sender-info h3 {
          color: var(--color-navy);
          margin-bottom: 0.25rem;
        }

        .sender-info a {
          color: var(--color-primary);
        }

        .sender-info .phone {
          display: block;
          color: #666;
          font-size: 0.9rem;
        }

        .message-meta {
          text-align: right;
          font-size: 0.85rem;
          color: #666;
        }

        .message-meta .date {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          justify-content: flex-end;
        }

        .message-meta .heard-from {
          display: block;
          margin-top: 0.25rem;
        }

        .message-body {
          color: #333;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .message-actions {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn.read {
          background: #dbeafe;
          color: #1e40af;
        }

        .icon-btn.read:hover {
          background: #1e40af;
          color: white;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          background: white;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .admin-header h1 {
          color: var(--color-navy);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .btn-primary {
          background: var(--color-primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--color-primary-dark);
        }

        .btn-secondary {
          background: #e0e0e0;
          color: #333;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          padding: 2rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          color: var(--color-navy);
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #333;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
        }

        .form-group input:focus, .form-group select:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .upload-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .image-preview {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--color-primary);
        }
        
        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .upload-options {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .upload-btn {
          cursor: pointer;
        }
        
        .or-divider {
          color: #999;
          font-size: 0.9rem;
        }
        
        .upload-options input[type="url"] {
          flex: 1;
          min-width: 200px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        /* Table */
        .team-list {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        .team-table {
          width: 100%;
          border-collapse: collapse;
        }

        .team-table th, .team-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .team-table th {
          background: var(--color-navy);
          color: white;
          font-weight: 600;
        }

        .team-table tr:hover {
          background: #f9f9f9;
        }

        .table-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--color-bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
        }

        .table-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .badge.leadership {
          background: #fef3c7;
          color: #92400e;
        }

        .badge.core {
          background: #dbeafe;
          color: #1e40af;
        }

        .badge.support {
          background: #d1fae5;
          color: #065f46;
        }

        .action-btns {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .icon-btn.edit {
          background: #dbeafe;
          color: #1e40af;
        }

        .icon-btn.edit:hover {
          background: #1e40af;
          color: white;
        }

        .icon-btn.delete {
          background: #fee2e2;
          color: #dc2626;
        }

        .icon-btn.delete:hover {
          background: #dc2626;
          color: white;
        }

        .empty-state, .loading {
          text-align: center;
          padding: 4rem 2rem;
          color: #666;
        }

        .empty-state svg {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          color: var(--color-navy);
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .admin-page {
            padding: 1rem;
          }
          .admin-header {
            flex-direction: column;
            gap: 1rem;
          }
          .team-table {
            display: block;
            overflow-x: auto;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Admin;
