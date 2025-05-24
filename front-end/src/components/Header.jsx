// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <header
            style={{
                backgroundColor: '#4a5568', // Màu xám giống ảnh
                color: 'white',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', color: '#e53e3e' }}>❤️</span>
                <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '8px' }}>Blood Donation</span>
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                    style={{
                        backgroundColor: '#3182ce', // Màu xanh dương
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
                >
                    Trang chủ
                </button>
                <button
                    style={{
                        backgroundColor: '#3182ce',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
                >
                    Hiến máu
                </button>
                <button
                    style={{
                        backgroundColor: '#3182ce',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
                >
                    Nhận máu
                </button>
                <button
                    style={{
                        backgroundColor: '#3182ce',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#2b6cb0')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
                >
                    Blog
                </button>
            </div>

            {/* Login and Register Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                    style={{
                        backgroundColor: '#e53e3e', // Màu đỏ
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c53030')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#e53e3e')}
                >
                    Đăng nhập
                </button>
                <button
                    style={{
                        backgroundColor: '#e53e3e',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#c53030')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#e53e3e')}
                >
                    Đăng ký
                </button>
            </div>
        </header>
    );
};

export default Header;