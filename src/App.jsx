import { useState, useEffect } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthdate: '',
    birthtime: ''
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentScreen(2);
  };

  useEffect(() => {
    if (currentScreen === 2) {
      const timer = setTimeout(() => {
        setCurrentScreen(3);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="app">
      {currentScreen === 1 && (
        <Screen1
          formData={formData}
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
        />
      )}
      {currentScreen === 2 && <Screen2 />}
      {currentScreen === 3 && <Screen3 onNext={() => setCurrentScreen(4)} />}
      {currentScreen === 4 && <Screen4 />}
    </div>
  );
}

function Screen1({ formData, onChange, onSubmit }) {
  return (
    <div className="screen screen-1">
      <div className="screen-1-content">
        <div className="icon-container">
          <img src="/hotel-logo.png" alt="Hotel Logo" className="mystical-icon" />
        </div>

        <h1 className="main-title">宪章堂五行•正念馆</h1>
        <p className="subtitle">五行命理 · 为您定制专属空间</p>

        <form className="personal-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>姓名</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>性别</label>
            <div className="gender-buttons">
              <button
                type="button"
                className={formData.gender === '男' ? 'gender-btn active' : 'gender-btn'}
                onClick={() => onChange('gender', '男')}
              >
                男
              </button>
              <button
                type="button"
                className={formData.gender === '女' ? 'gender-btn active' : 'gender-btn'}
                onClick={() => onChange('gender', '女')}
              >
                女
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>出生日期</label>
            <input
              type="date"
              value={formData.birthdate}
              onChange={(e) => onChange('birthdate', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>出生时辰</label>
            <input
              type="time"
              value={formData.birthtime}
              onChange={(e) => onChange('birthtime', e.target.value)}
              required
            />
          </div>

          <button type="submit" className="cta-button">
            开始匹配命运之居
          </button>
        </form>

        <p className="footer-text">您的信息将被加密处理，仅用于五行测算</p>
      </div>
    </div>
  );
}

function Screen2() {
  return (
    <div className="screen screen-2">
      <div className="loading-container">
        <div className="orbit-animation">
          <div className="orbit orbit-1">
            <div className="dot dot-1"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="dot dot-2"></div>
          </div>
          <div className="orbit orbit-3">
            <div className="dot dot-3"></div>
          </div>
          <div className="center-core"></div>
        </div>

        <div className="loading-text">
          <h2>用神测算中…</h2>
          <p>系统正自动测算您的五行用神报告并为您筛选所有匹配的房型</p>
        </div>
      </div>
    </div>
  );
}

function Screen3({ onNext }) {
  return (
    <div className="screen screen-3">
      <div className="mountain-background">
        <img src="/mountain.jpg" alt="Mountain Background" className="mountain-image" />
      </div>

      <div className="result-content">
        <h1 className="result-title">您的用神</h1>
        <p className="result-subtitle">根据您的生辰八字，系统已为您推荐最适合的房型</p>
        <div className="result-benefits">
          <p>宜住：</p>
          <p>• 提升运势，助力事业</p>
          <p>• 安神养心，改善睡眠</p>
          <p>• 五行平衡，身心康泰</p>
        </div>
        <button className="reveal-button" onClick={onNext}>
          开启房间定制
        </button>
      </div>
    </div>
  );
}

function Screen4() {
  const rooms = [
    {
      name: '如意房',
      price: '¥5555',
      description: '土生万物，如意吉祥。宽敞舒适，厚德载福'
    },
    {
      name: '喜乐房',
      price: '¥6666',
      description: '沉稳大气，喜乐安康。中正平和，聚气养神'
    },
    {
      name: '福临房',
      price: '¥8888',
      description: '五行归土，福运临门。尊贵典雅，厚土承运'
    }
  ];

  return (
    <div className="screen screen-4">
      <h2 className="rooms-title">为您定制的土元素房型</h2>

      <div className="rooms-list">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <div className="room-image">
              <img src="/room.png" alt={room.name} className="room-photo" />
            </div>
            <div className="room-info">
              <div className="room-header">
                <h3 className="room-name">{room.name}</h3>
                <div className="room-price-large">{room.price}</div>
              </div>
              <p className="room-description">{room.description}</p>
              <div className="room-footer">
                <div className="element-badge">土</div>
                <button className="book-button">抢</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
