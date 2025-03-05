import React, { useState } from 'react';
import useUserStore from '../../app/store/store';


interface EnterUsernameModalProps {
  onCancel: () => void; // Колбэк для отмены
}

const EnterUsernameModal: React.FC<EnterUsernameModalProps> = ({ onCancel }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const authorize = useUserStore((state) => state.authorize); // Метод авторизации из стора

  const handleSave = () => {
    if (username.trim()) {
      authorize(username); // Авторизуем пользователя через стор
      setError('');
    } else {
      setError('Юзернейм обязателен');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Введите ваш юзернейм</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ваш юзернейм"
        />
        {error && <p className="error">{error}</p>}
        <div className="modal-actions">
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={onCancel}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default EnterUsernameModal;