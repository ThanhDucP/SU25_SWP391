// src/App.jsx
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <main
                style={{
                    minHeight: '5000px',
                    backgroundColor: 'white', // Màu trắng cho phần giữa
                    color: '#1a202c', // Màu chữ tối để dễ đọc
                    padding: '20px',
                    textAlign: 'center',
                }}
            >
                <h3>Nội dung chính của Project</h3>
                <p>Đây là nội dung giả lập để đạt chiều cao 5000px. Bạn có thể cuộn xuống để xem Footer.</p>
            
            </main>
            <Footer />
        </div>
    );
}

export default App;