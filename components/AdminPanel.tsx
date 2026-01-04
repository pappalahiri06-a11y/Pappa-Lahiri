
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

interface Lead {
  id: number;
  username: string;
  email: string;
  date: string;
}

const AdminPanel: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    const storedLeads = JSON.parse(localStorage.getItem('ebook_leads') || '[]');
    setLeads(storedLeads);
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all leads? This action cannot be undone.')) {
      localStorage.removeItem('ebook_leads');
      setLeads([]);
    }
  };

  const handleDeleteLead = (id: number) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    localStorage.setItem('ebook_leads', JSON.stringify(updatedLeads));
    setLeads(updatedLeads);
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch = 
        lead.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Date filtering: we check if the selected date (YYYY-MM-DD) matches the start of our locale date string
      // Note: This is a best-effort match since toLocaleString is format-dependent
      const matchesDate = !dateFilter || lead.date.includes(new Date(dateFilter).toLocaleDateString());
      
      return matchesSearch && matchesDate;
    });
  }, [leads, searchTerm, dateFilter]);

  const handleExportCSV = () => {
    const dataToExport = filteredLeads.length > 0 ? filteredLeads : leads;
    if (dataToExport.length === 0) return;
    
    const headers = ['Name', 'Email', 'Date Submitted'];
    const rows = dataToExport.map(lead => [lead.username, lead.email, lead.date]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12">
      <div className="container mx-auto max-w-6xl">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <button 
              onClick={() => navigate('/')}
              className="text-emerald-500 hover:text-emerald-400 flex items-center gap-2 mb-4 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Landing Page
            </button>
            <h1 className="text-3xl font-extrabold text-white">Lead Management Dashboard</h1>
            <p className="text-slate-400 mt-1">Manage and export your "North Bengal Guide" ebook subscribers.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {filteredLeads.length !== leads.length ? 'Export Filtered' : 'Export CSV'}
            </button>
            <button
              onClick={handleClearAll}
              disabled={leads.length === 0}
              className="flex items-center gap-2 px-6 py-2.5 bg-red-600/10 hover:bg-red-600/20 text-red-500 font-bold rounded-xl border border-red-500/20 transition-all"
            >
              Clear All
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Leads" value={leads.length.toString()} icon="users" />
          <StatCard title="Filtered Results" value={filteredLeads.length.toString()} icon="search" color="emerald" />
          <StatCard title="Database Status" value="Active" icon="check" color="emerald" />
        </div>

        {/* Filters Section */}
        <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
            />
          </div>
          <div className="relative md:w-64">
             <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <input 
              type="date" 
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all appearance-none"
            />
          </div>
          {(searchTerm || dateFilter) && (
            <button 
              onClick={() => { setSearchTerm(''); setDateFilter(''); }}
              className="px-6 py-3 text-slate-400 hover:text-white font-medium transition-colors"
            >
              Reset
            </button>
          )}
        </div>

        {/* Leads Table */}
        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="px-8 py-5 text-sm font-bold text-slate-300 uppercase tracking-wider">Lead</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-300 uppercase tracking-wider">Contact Email</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-300 uppercase tracking-wider">Date Captured</th>
                  <th className="px-8 py-5 text-sm font-bold text-slate-300 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                            {lead.username.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-semibold text-white">{lead.username}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-slate-300 font-medium">{lead.email}</td>
                      <td className="px-8 py-6 text-slate-400 text-sm">{lead.date}</td>
                      <td className="px-8 py-6 text-right">
                        <button 
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 text-slate-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                          title="Delete Lead"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center">
                       <div className="flex flex-col items-center gap-4">
                          <svg className="w-12 h-12 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-slate-500 italic">
                            {leads.length === 0 ? 'No leads captured yet.' : 'No matches found for your current filters.'}
                          </p>
                       </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ title: string; value: string; icon: string; color?: string }> = ({ title, value, icon, color }) => (
  <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
    <div className="flex items-center justify-between mb-4">
      <span className="text-slate-400 font-medium">{title}</span>
      <div className={`p-2 rounded-lg ${color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-800 text-slate-400'}`}>
        {icon === 'users' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        {icon === 'search' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
        {icon === 'check' && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </div>
    <div className="text-3xl font-black text-white">{value}</div>
  </div>
);

export default AdminPanel;
