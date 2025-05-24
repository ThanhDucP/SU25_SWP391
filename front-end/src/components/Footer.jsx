// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    const exploreLinks = [
        { title: 'Trang chủ', link: '/' },
        { title: 'Hiến máu', link: '/donor' },
        { title: 'Yêu cầu máu', link: '/blood-request' },
        { title: 'Tổ chức hiến máu', link: '/host-blood-drive' },
        { title: 'Liên hệ', link: '/contact' },
        { title: 'Dashboard Quản trị', link: '/dashboard' },
    ];

    const contactLinks = [
        { title: '(+84)-123-456-7890', link: 'tel:+841234567890', ariaLabel: 'Gọi số' },
        { title: 'help@hemocell.vn', link: 'mailto:help@hemocell.vn', ariaLabel: 'Gửi email' },
        { title: 'Hà Nội, Việt Nam', link: 'https://goo.gl/maps/xyz', ariaLabel: 'Xem bản đồ' },
        { title: 'Mở cửa 24/7', link: '/contact', ariaLabel: 'Liên hệ' },
    ];

    return (
        <footer className="footer" style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px 10px', width: '100%' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Explore Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontSize: '14px', color: '#e53e3e', textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>
                        KHÁM PHÁ
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {exploreLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                style={{ fontSize: '14px', color: 'white', textDecoration: 'none' }}
                                onMouseOver={(e) => (e.target.style.color = '#e53e3e')}
                                onMouseOut={(e) => (e.target.style.color = 'white')}
                                aria-label={link.title}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h3 style={{ fontSize: '14px', color: '#e53e3e', textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>
                        LIÊN HỆ
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.link}
                                style={{ fontSize: '14px', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                                onMouseOver={(e) => (e.target.style.color = '#e53e3e')}
                                onMouseOut={(e) => (e.target.style.color = 'white')}
                                aria-label={link.ariaLabel}
                                target={link.link.startsWith('http') ? '_blank' : '_self'}
                                rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', marginTop: '16px', paddingTop: '16px', textAlign: 'center', color: '#a0aec0', fontSize: '10px' }}>
                © 2025 ABC - Thiết kế bởi{' '}
                <a
                    href="https://github.com/your-team"
                    style={{ color: '#a0aec0', textDecoration: 'underline' }}
                    onMouseOver={(e) => (e.target.style.color = '#e53e3e')}
                    onMouseOut={(e) => (e.target.style.color = '#a0aec0')}
                    aria-label="Trang GitHub của nhóm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nhóm Sinh Viên Trường 3 Chữ
                </a>
            </div>
        </footer>
    );
};

export default Footer;