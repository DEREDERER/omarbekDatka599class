// Админ-панель для управления сайтом
class AdminPanel {
    constructor() {
        this.isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
        this.adminPassword = "omarbek599"; // Замените на свой пароль
        this.init();
    }

    init() {
        this.checkAuth();
        this.setupEventListeners();
        if (this.isAuthenticated) {
            this.showAdminPanel();
            this.loadAdminData();
        }
    }

    checkAuth() {
        const loginSection = document.getElementById('loginSection');
        const adminPanel = document.getElementById('adminPanel');

        if (this.isAuthenticated) {
            loginSection.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            loginSection.style.display = 'block';
            adminPanel.style.display = 'none';
        }
    }

    setupEventListeners() {
        // Кнопка входа
        document.getElementById('loginBtn').addEventListener('click', () => this.login());
        
        // Поле пароля (ввод по Enter)
        document.getElementById('adminPassword').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.login();
        });

        // Кнопка выхода
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // Переключение вкладок
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabId = e.target.getAttribute('data-tab');
                this.switchTab(tabId);
            });
        });

        // Кнопки управления
        document.getElementById('addTaskBtn').addEventListener('click', () => this.showAddTaskModal());
        document.getElementById('refreshCodesBtn').addEventListener('click', () => this.loadCommunityCodes());
        document.getElementById('resetDataBtn').addEventListener('click', () => this.resetAllData());
        document.getElementById('exportDataBtn').addEventListener('click', () => this.exportData());
        document.getElementById('viewStatsBtn').addEventListener('click', () => this.showStats());
    }

    login() {
        const password = document.getElementById('adminPassword').value;
        
        if (password === this.adminPassword) {
            this.isAuthenticated = true;
            localStorage.setItem('adminAuthenticated', 'true');
            this.checkAuth();
            this.loadAdminData();
        } else {
            alert('Неверный пароль!');
        }
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem('adminAuthenticated');
        this.checkAuth();
    }

    switchTab(tabId) {
        // Скрыть все вкладки
        document.querySelectorAll('.admin-tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Убрать активный класс у всех кнопок
        document.querySelectorAll('.admin-tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Показать выбранную вкладку
        document.getElementById(tabId + 'Tab').classList.add('active');
        
        // Активировать кнопку
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

        // Загрузить данные для вкладки
        if (tabId === 'tasks') {
            this.loadTasks();
        } else if (tabId === 'community') {
            this.loadCommunityCodes();
        }
    }

    showAdminPanel() {
        this.loadAdminData();
    }

    loadAdminData() {
        this.updateStats();
        this.loadTasks();
        this.loadCommunityCodes();
    }

    updateStats() {
        const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        const codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
        const authors = new Set(codes.map(code => code.author));
        
        document.getElementById('totalTasks').textContent = tasks.length;
        document.getElementById('totalCodes').textContent = codes.length;
        document.getElementById('totalUsers').textContent = authors.size;
    }

    loadTasks() {
        const tasksList = document.getElementById('adminTasksList');
        const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        
        if (tasks.length === 0) {
            tasksList.innerHTML = '<div class="empty-state"><p>Пока нет задач</p></div>';
            return;
        }

        tasksList.innerHTML = tasks.map(task => `
            <div class="admin-task-item">
                <div class="task-info">
                    <h4>${task.title}</h4>
                    <p>${task.description}</p>
                    <div class="task-meta">
                        <span class="task-id">ID: ${task.id}</span>
                        <span class="task-type">${task.type}</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="btn btn-outline edit-task" data-id="${task.id}">✏️ Редактировать</button>
                    <button class="btn btn-danger delete-task" data-id="${task.id}">🗑️ Удалить</button>
                </div>
            </div>
        `).join('');

        // Добавляем обработчики для кнопок
        this.setupTaskButtons();
    }

    setupTaskButtons() {
        // Кнопки редактирования
        document.querySelectorAll('.edit-task').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const taskId = e.target.getAttribute('data-id');
                this.editTask(taskId);
            });
        });

        // Кнопки удаления
        document.querySelectorAll('.delete-task').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const taskId = e.target.getAttribute('data-id');
                this.deleteTask(taskId);
            });
        });
    }

    showAddTaskModal() {
        const modal = document.getElementById('taskModal');
        const modalBody = document.getElementById('taskModalBody');
        
        modalBody.innerHTML = `
            <h2>Добавить новую задачу</h2>
            <form id="addTaskForm">
                <div class="form-group">
                    <label>Название задачи</label>
                    <input type="text" id="taskTitle" required>
                </div>
                <div class="form-group">
                    <label>Описание</label>
                    <textarea id="taskDescription" required></textarea>
                </div>
                <div class="form-group">
                    <label>Код</label>
                    <textarea id="taskCode" required></textarea>
                </div>
                <div class="form-group">
                    <label>Тип</label>
                    <select id="taskType">
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Сложность</label>
                    <select id="taskDifficulty">
                        <option value="easy">Легко</option>
                        <option value="medium">Средне</option>
                        <option value="hard">Сложно</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Добавить задачу</button>
                    <button type="button" class="btn btn-outline close-task-modal">Отмена</button>
                </div>
            </form>
        `;

        modal.style.display = 'block';

        // Обработчик формы
        document.getElementById('addTaskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveNewTask();
        });

        // Кнопка отмены
        document.querySelector('.close-task-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    saveNewTask() {
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const code = document.getElementById('taskCode').value;
        const type = document.getElementById('taskType').value;
        const difficulty = document.getElementById('taskDifficulty').value;

        const newTask = {
            id: Date.now().toString(),
            title: title,
            description: description,
            code: code,
            type: type,
            difficulty: difficulty,
            date: new Date().toISOString()
        };

        let tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        tasks.push(newTask);
        localStorage.setItem('savedTasks', JSON.stringify(tasks));

        document.getElementById('taskModal').style.display = 'none';
        this.loadTasks();
        this.updateStats();
        
        alert('Задача успешно добавлена!');
    }

    editTask(taskId) {
        const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        const task = tasks.find(t => t.id === taskId);
        
        if (!task) {
            alert('Задача не найдена!');
            return;
        }

        const modal = document.getElementById('taskModal');
        const modalBody = document.getElementById('taskModalBody');
        
        modalBody.innerHTML = `
            <h2>Редактировать задачу</h2>
            <form id="editTaskForm">
                <div class="form-group">
                    <label>Название задачи</label>
                    <input type="text" id="editTaskTitle" value="${task.title}" required>
                </div>
                <div class="form-group">
                    <label>Описание</label>
                    <textarea id="editTaskDescription" required>${task.description}</textarea>
                </div>
                <div class="form-group">
                    <label>Код</label>
                    <textarea id="editTaskCode" required>${task.code}</textarea>
                </div>
                <div class="form-group">
                    <label>Тип</label>
                    <select id="editTaskType">
                        <option value="html" ${task.type === 'html' ? 'selected' : ''}>HTML</option>
                        <option value="css" ${task.type === 'css' ? 'selected' : ''}>CSS</option>
                        <option value="javascript" ${task.type === 'javascript' ? 'selected' : ''}>JavaScript</option>
                        <option value="python" ${task.type === 'python' ? 'selected' : ''}>Python</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Сложность</label>
                    <select id="editTaskDifficulty">
                        <option value="easy" ${task.difficulty === 'easy' ? 'selected' : ''}>Легко</option>
                        <option value="medium" ${task.difficulty === 'medium' ? 'selected' : ''}>Средне</option>
                        <option value="hard" ${task.difficulty === 'hard' ? 'selected' : ''}>Сложно</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Сохранить изменения</button>
                    <button type="button" class="btn btn-outline close-task-modal">Отмена</button>
                    <button type="button" class="btn btn-danger" id="deleteTaskBtn">Удалить задачу</button>
                </div>
            </form>
        `;

        modal.style.display = 'block';

        document.getElementById('editTaskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.updateTask(taskId);
        });

        document.querySelector('.close-task-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        document.getElementById('deleteTaskBtn').addEventListener('click', () => {
            if (confirm('Вы уверены, что хотите удалить эту задачу?')) {
                this.deleteTask(taskId);
                modal.style.display = 'none';
            }
        });
    }

    updateTask(taskId) {
        const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        const taskIndex = tasks.findIndex(t => t.id === taskId);
        
        if (taskIndex === -1) {
            alert('Задача не найдена!');
            return;
        }

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: document.getElementById('editTaskTitle').value,
            description: document.getElementById('editTaskDescription').value,
            code: document.getElementById('editTaskCode').value,
            type: document.getElementById('editTaskType').value,
            difficulty: document.getElementById('editTaskDifficulty').value
        };

        localStorage.setItem('savedTasks', JSON.stringify(tasks));
        document.getElementById('taskModal').style.display = 'none';
        this.loadTasks();
        
        alert('Задача обновлена!');
    }

    deleteTask(taskId) {
        let tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        tasks = tasks.filter(t => t.id !== taskId);
        localStorage.setItem('savedTasks', JSON.stringify(tasks));
        this.loadTasks();
        this.updateStats();
        
        alert('Задача удалена!');
    }

    loadCommunityCodes() {
        const codesList = document.getElementById('adminCodesList');
        const codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
        
        if (codes.length === 0) {
            codesList.innerHTML = '<div class="empty-state"><p>Пока нет кодов в сообществе</p></div>';
            return;
        }

        codesList.innerHTML = codes.map(code => `
            <div class="admin-code-item">
                <div class="code-info">
                    <h4>${code.title}</h4>
                    <p>${code.description}</p>
                    <div class="code-meta">
                        <span class="code-author">👤 ${code.author}</span>
                        <span class="code-language">${code.language.toUpperCase()}</span>
                        <span class="code-likes">❤️ ${code.likes} лайков</span>
                        <span class="code-date">📅 ${new Date(code.date).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="code-actions">
                    <button class="btn btn-outline view-code" data-id="${code.id}">👁️ Просмотр</button>
                    <button class="btn btn-danger delete-code" data-id="${code.id}">🗑️ Удалить</button>
                </div>
            </div>
        `).join('');

        this.setupCodeButtons();
    }

    setupCodeButtons() {
        document.querySelectorAll('.delete-code').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const codeId = e.target.getAttribute('data-id');
                this.deleteCommunityCode(codeId);
            });
        });
    }

    deleteCommunityCode(codeId) {
        if (confirm('Вы уверены, что хотите удалить этот код из сообщества?')) {
            let codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
            codes = codes.filter(c => c.id !== codeId);
            localStorage.setItem('communityCodes', JSON.stringify(codes));
            this.loadCommunityCodes();
            this.updateStats();
            
            alert('Код удален из сообщества!');
        }
    }

    resetAllData() {
        if (confirm('ВНИМАНИЕ! Это удалит ВСЕ данные сайта: задачи, коды сообщества, достижения. Продолжить?')) {
            localStorage.clear();
            alert('Все данные сброшены!');
            this.loadAdminData();
        }
    }

    exportData() {
        const data = {
            tasks: JSON.parse(localStorage.getItem('savedTasks')) || [],
            communityCodes: JSON.parse(localStorage.getItem('communityCodes')) || [],
            achievements: JSON.parse(localStorage.getItem('achievements')) || {},
            ratings: JSON.parse(localStorage.getItem('taskRatings')) || {}
        };

        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `infoclass-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
        alert('Данные экспортированы!');
    }

    showStats() {
        const tasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
        const codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
        const ratings = JSON.parse(localStorage.getItem('taskRatings')) || {};
        
        const stats = `
            📊 Статистика сайта:
            
            📚 Задачи: ${tasks.length}
            👥 Кодов в сообществе: ${codes.length}
            ⭐ Средний рейтинг задач: ${Object.values(ratings).length > 0 ? 
                (Object.values(ratings).reduce((sum, r) => sum + r.rating, 0) / Object.values(ratings).length).toFixed(1) : 'Нет оценок'}
            🏆 Получено достижений: ${Object.values(JSON.parse(localStorage.getItem('achievements')) || {}).filter(a => a.earned).length}
            
            💾 Размер данных: ${JSON.stringify(localStorage).length} байт
        `;
        
        alert(stats);
    }
}

// Инициализация админ-панели
document.addEventListener('DOMContentLoaded', function() {
    new AdminPanel();
});