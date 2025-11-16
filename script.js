// Объект с подробными объяснениями для каждой задачи
const taskExplanations = {
    1: {
        title: "Создание простой веб-страницы",
        content: `
            <h2>Создание простой веб-страницы</h2>
            <p>Эта задача знакомит вас с основами HTML - языка разметки для создания веб-страниц.</p>
            
            <h3>Что такое HTML?</h3>
            <p>HTML (HyperText Markup Language) - это стандартный язык разметки для создания веб-страниц.</p>
            
            <h3>Основные элементы кода:</h3>
            <ul>
                <li><strong>&lt;!DOCTYPE html&gt;</strong> - объявление типа документа</li>
                <li><strong>&lt;html&gt;</strong> - корневой элемент страницы</li>
                <li><strong>&lt;head&gt;</strong> - содержит метаинформацию о странице</li>
                <li><strong>&lt;title&gt;</strong> - заголовок страницы (отображается во вкладке браузера)</li>
                <li><strong>&lt;body&gt;</strong> - содержит видимое содержимое страницы</li>
                <li><strong>&lt;h1&gt;</strong> - заголовок первого уровня</li>
                <li><strong>&lt;p&gt;</strong> - абзац текста</li>
                <li><strong>&lt;img&gt;</strong> - изображение с атрибутами src (источник) и alt (альтернативный текст)</li>
            </ul>
            
            <h3>Как использовать этот код:</h3>
            <ol>
                <li>Скопируйте код в текстовый редактор (например, Notepad++, VS Code)</li>
                <li>Сохраните файл с расширением .html (например, index.html)</li>
                <li>Откройте файл в браузере двойным кликом</li>
            </ol>
            
            <h3>Советы:</h3>
            <ul>
                <li>Всегда закрывайте теги</li>
                <li>Используйте правильную вложенность тегов</li>
                <li>Добавляйте атрибут alt для изображений для доступности</li>
            </ul>
        `
    },
    2: {
        title: "Стилизация элементов CSS",
        content: `
            <h2>Стилизация элементов CSS</h2>
            <p>CSS (Cascading Style Sheets) позволяет управлять внешним видом HTML-элементов.</p>
            
            <h3>Основные концепции CSS:</h3>
            <ul>
                <li><strong>Селекторы</strong> - определяют, к каким элементам применяются стили</li>
                <li><strong>Свойства</strong> - определяют, какие аспекты внешнего вида изменяются</li>
                <li><strong>Значения</strong> - конкретные настройки для свойств</li>
            </ul>
            
            <h3>Разбор кода:</h3>
            <pre><code>/* Стили для заголовка */
h1 {
    color: #2c3e50;           /* Цвет текста */
    font-family: 'Arial';     /* Шрифт */
    text-align: center;       /* Выравнивание по центру */
    margin-bottom: 20px;      /* Отступ снизу */
}</code></pre>
            
            <h3>Полезные свойства CSS:</h3>
            <ul>
                <li><code>color</code> - цвет текста</li>
                <li><code>background-color</code> - цвет фона</li>
                <li><code>font-size</code> - размер шрифта</li>
                <li><code>padding</code> - внутренние отступы</li>
                <li><code>margin</code> - внешние отступы</li>
                <li><code>border-radius</code> - скругление углов</li>
            </ul>
            
            <h3>Как подключить CSS к HTML:</h3>
            <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
        `
    },
    3: {
        title: "Интерактивная кнопка на JavaScript",
        content: `
            <h2>Интерактивная кнопка на JavaScript</h2>
            <p>JavaScript добавляет интерактивность на веб-страницы.</p>
            
            <h3>Основные концепции:</h3>
            <ul>
                <li><strong>DOM (Document Object Model)</strong> - представление HTML-документа в виде объектов</li>
                <li><strong>События</strong> - действия пользователя (клик, наведение и т.д.)</li>
                <li><strong>Обработчики событий</strong> - функции, которые выполняются при возникновении событий</li>
            </ul>
            
            <h3>Разбор кода:</h3>
            <pre><code>// Получаем элемент кнопки по ID
const button = document.getElementById('myButton');

// Добавляем обработчик события клика
button.addEventListener('click', function() {
    // this ссылается на саму кнопку
    this.style.backgroundColor = '#e74c3c'; // Меняем цвет фона
    this.textContent = 'Нажато!'; // Меняем текст
    
    // Показываем всплывающее окно
    alert('Кнопка была нажата!');
    
    // Возвращаем исходный вид через 2 секунды
    setTimeout(() => {
        this.style.backgroundColor = '#3498db';
        this.textContent = 'Нажми меня';
    }, 2000);
});</code></pre>
            
            <h3>Часто используемые события:</h3>
            <ul>
                <li><code>click</code> - клик мышью</li>
                <li><code>mouseover</code> - наведение курсора</li>
                <li><code>mouseout</code> - уход курсора</li>
                <li><code>keydown</code> - нажатие клавиши</li>
                <li><code>load</code> - загрузка страницы</li>
            </ul>
        `
    },
    4: {
        title: "Простой калькулятор",
        content: `
            <h2>Простой калькулятор на JavaScript</h2>
            <p>Этот пример демонстрирует основы работы с функциями и условными операторами в JavaScript.</p>
            
            <h3>Основные концепции:</h3>
            <ul>
                <li><strong>Функции</strong> - блоки кода, которые выполняют определенную задачу</li>
                <li><strong>Параметры</strong> - данные, которые передаются в функцию</li>
                <li><strong>Возвращаемое значение</strong> - результат работы функции</li>
                <li><strong>Условные операторы</strong> - позволяют выполнять разный код в зависимости от условий</li>
            </ul>
            
            <h3>Разбор кода:</h3>
            <pre><code>// Функция сложения
function add(a, b) {
    return a + b; // Возвращаем сумму
}

// Функция деления с проверкой на ноль
function divide(a, b) {
    if (b === 0) {
        return 'Ошибка: деление на ноль!';
    }
    return a / b;
}

// Основная функция калькулятора
function calculate(operation, a, b) {
    switch(operation) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Неизвестная операция';
    }
}</code></pre>
            
            <h3>Оператор switch:</h3>
            <p>Используется для выполнения разных действий в зависимости от значения переменной.</p>
            
            <h3>Обработка ошибок:</h3>
            <p>Всегда проверяйте ввод пользователя. В этом примере мы проверяем деление на ноль.</p>
        `
    },
    5: {
        title: "Анимация движения",
        content: `
            <h2>Анимация движения на CSS</h2>
            <p>CSS анимации позволяют создавать плавные переходы и движения без JavaScript.</p>
            
            <h3>Основные концепции:</h3>
            <ul>
                <li><strong>@keyframes</strong> - определяет этапы анимации</li>
                <li><strong>animation</strong> - свойство для применения анимации</li>
                <li><strong>transform</strong> - преобразования элемента (перемещение, вращение, масштаб)</li>
                <li><strong>transition</strong> - плавные переходы между состояниями</li>
            </ul>
            
            <h3>Разбор кода:</h3>
            <pre><code>/* Определение анимации */
@keyframes moveAndChange {
    0% {
        left: 0;
        top: 0;
        transform: rotate(0deg);
        background: linear-gradient(45deg, #3498db, #9b59b6);
    }
    25% {
        left: 200px;
        top: 0;
        transform: rotate(90deg);
        background: linear-gradient(45deg, #2ecc71, #3498db);
    }
    /* ... и так далее */
}

/* Применение анимации к элементу */
.animated-box {
    animation: moveAndChange 4s ease-in-out infinite;
}</code></pre>
            
            <h3>Свойства анимации:</h3>
            <ul>
                <li><code>animation-name</code> - имя анимации</li>
                <li><code>animation-duration</code> - продолжительность</li>
                <li><code>animation-timing-function</code> - функция времени (ease, linear, etc.)</li>
                <li><code>animation-iteration-count</code> - количество повторений (infinite для бесконечности)</li>
                <li><code>animation-direction</code> - направление анимации</li>
            </ul>
        `
    },
    6: {
        title: "Валидация формы",
        content: `
            <h2>Валидация формы на JavaScript</h2>
            <p>Валидация - процесс проверки введенных данных на корректность.</p>
            
            <h3>Зачем нужна валидация:</h3>
            <ul>
                <li>Предотвращение ошибок</li>
                <li>Улучшение пользовательского опыта</li>
                <li>Защита от неверных данных</li>
            </ul>
            
            <h3>Разбор кода:</h3>
            <pre><code>// Функция валидации email с регулярным выражением
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Основная функция валидации формы
function validateForm(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы
    
    // Получаем значения полей
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let isValid = true;
    let errors = [];
    
    // Проверяем email
    if (!validateEmail(email)) {
        isValid = false;
        errors.push('Введите корректный email адрес');
    }
    
    // Проверяем пароль
    if (!validatePassword(password)) {
        isValid = false;
        errors.push('Пароль должен содержать минимум 8 символов');
    }
    
    // Показываем результат
    if (!isValid) {
        // Показываем ошибки
        showErrors(errors);
    } else {
        // Отправляем форму
        submitForm();
    }
}</code></pre>
            
            <h3>Регулярные выражения:</h3>
            <p>Используются для сложных проверок текста. В примере мы проверяем формат email.</p>
            
            <h3>event.preventDefault():</h3>
            <p>Отменяет стандартное поведение браузера (в данном случае - отправку формы).</p>
        `
    }
};

// Умный чат-бот с расширенными возможностями
class SmartChatBot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.knowledgeBase = this.createKnowledgeBase();
        this.init();
    }

    createKnowledgeBase() {
        return {
            'html': {
                patterns: ['html', 'тег', 'разметка', 'верстка', 'hypertext'],
                responses: [
                    'HTML - язык разметки для создания веб-страниц. Основные теги: <div>, <p>, <h1>-<h6>, <a>, <img>.',
                    'Для изучения HTML начни с базовой структуры документа, затем изучи семантические теги.',
                    'Популярные HTML теги: header, nav, section, article, footer - это семантические теги для лучшей структуры.'
                ],
                learning: '🎯 План обучения HTML:\n1. Базовая структура документа\n2. Текстовые теги и заголовки\n3. Ссылки и изображения\n4. Формы и инпуты\n5. Семантическая верстка'
            },
            'css': {
                patterns: ['css', 'стили', 'оформление', 'дизайн', 'flex', 'grid'],
                responses: [
                    'CSS - каскадные таблицы стилей для оформления HTML.',
                    'Основные концепции CSS: селекторы, свойства, каскадность, наследование.',
                    'Современный CSS: Flexbox для одномерных и Grid для двумерных раскладок.'
                ],
                learning: '🎯 План обучения CSS:\n1. Селекторы и основные свойства\n2. Блочная модель и позиционирование\n3. Flexbox раскладка\n4. CSS Grid\n5. Анимации и трансформации'
            },
            'javascript': {
                patterns: ['javascript', 'js', 'программирование', 'скрипт', 'функция', 'переменная'],
                responses: [
                    'JavaScript - язык программирования для создания интерактивных веб-страниц.',
                    'Основы JS: переменные, типы данных, функции, условия, циклы.',
                    'Продвинутый JS: DOM manipulation, события, асинхронность, API.'
                ],
                learning: '🎯 План обучения JavaScript:\n1. Переменные и типы данных\n2. Функции и условия\n3. Работа с DOM\n4. События и обработчики\n5. Асинхронный код'
            },
            'python': {
                patterns: ['python', 'питон', 'data science', 'машинное обучение'],
                responses: [
                    'Python - мощный язык для веб-разработки, data science и AI.',
                    'Python известен простым синтаксисом и большим сообществом.',
                    'Популярные фреймворки: Django для веба, Pandas для данных, TensorFlow для AI.'
                ],
                learning: '🎯 План обучения Python:\n1. Синтаксис и базовые структуры\n2. Функции и модули\n3. Работа с файлами\n4. ООП в Python\n5. Веб-фреймворки (Django/Flask)'
            },
            'обучение': {
                patterns: ['учиться', 'обучение', 'научиться', 'изучить', 'курс', 'урок'],
                responses: [
                    'Отличное желание учиться! Давай подберем подходящее направление.',
                    'Программирование - это практика! Начни с основ и регулярно практикуйся.',
                    'Рекомендую начинать с HTML/CSS, затем переходить к JavaScript.'
                ],
                learning: '🚀 Рекомендованный путь обучения:\n1. HTML/CSS (2-3 недели)\n2. JavaScript (1-2 месяца)\n3. Фреймворки (React/Vue)\n4. Backend (Node.js/Python)\n5. Базы данных'
            },
            'ошибка': {
                patterns: ['ошибка', 'не работает', 'баг', 'проблема', 'help', 'помоги'],
                responses: [
                    'Попробуй использовать console.log() для отладки кода.',
                    'Проверь синтаксис и закрытие всех скобок/кавычек.',
                    'Используй инструменты разработчика в браузере (F12).'
                ],
                learning: '🔧 Советы по отладке:\n1. Читай сообщения об ошибках\n2. Используй console.log()\n3. Проверяй типы данных\n4. Тестируй код по частям\n5. Ищи решение в документации'
            }
        };
    }

    init() {
        this.createBotHTML();
        this.setupEventListeners();
        this.addMessage('bot', 'Привет! Я умный помощник по программированию. Спроси меня о HTML, CSS, JavaScript, Python или попроси составить план обучения! 🤖');
    }

    createBotHTML() {
        const botHTML = `
            <div class="chat-bot">
                <button class="chat-bot-toggle">🤖</button>
                <div class="chat-bot-window">
                    <div class="chat-bot-header">
                        <h3>Умный помощник</h3>
                        <div class="chat-bot-actions">
                            <button class="clear-chat" title="Очистить историю">🗑️</button>
                            <button class="chat-bot-close">×</button>
                        </div>
                    </div>
                    <div class="chat-bot-messages"></div>
                    <div class="chat-bot-input">
                        <input type="text" placeholder="Спроси о программировании...">
                        <button class="send-btn">➤</button>
                    </div>
                    <div class="quick-questions">
                        <button class="quick-question" data-question="Как начать учить программирование?">🎯 Начать учить</button>
                        <button class="quick-question" data-question="План обучения HTML">📚 HTML</button>
                        <button class="quick-question" data-question="План обучения JavaScript">⚡ JavaScript</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', botHTML);
    }

    setupEventListeners() {
        const toggleBtn = document.querySelector('.chat-bot-toggle');
        const closeBtn = document.querySelector('.chat-bot-close');
        const clearBtn = document.querySelector('.clear-chat');
        const input = document.querySelector('.chat-bot-input input');
        const sendBtn = document.querySelector('.send-btn');
        const quickQuestions = document.querySelectorAll('.quick-question');

        toggleBtn.addEventListener('click', () => this.toggle());
        closeBtn.addEventListener('click', () => this.close());
        clearBtn.addEventListener('click', () => this.clearChat());
        
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        quickQuestions.forEach(btn => {
            btn.addEventListener('click', () => {
                const question = btn.getAttribute('data-question');
                input.value = question;
                this.sendMessage();
            });
        });
    }

    toggle() {
        const window = document.querySelector('.chat-bot-window');
        this.isOpen = !this.isOpen;
        window.classList.toggle('active', this.isOpen);
    }

    close() {
        const window = document.querySelector('.chat-bot-window');
        this.isOpen = false;
        window.classList.remove('active');
    }

    clearChat() {
        this.messages = [];
        this.updateMessagesDisplay();
        this.addMessage('bot', 'История очищена! Чем могу помочь? 🤖');
    }

    addMessage(sender, text) {
        this.messages.push({ sender, text, timestamp: new Date() });
        this.updateMessagesDisplay();
    }

    updateMessagesDisplay() {
        const messagesContainer = document.querySelector('.chat-bot-messages');
        messagesContainer.innerHTML = '';

        this.messages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${msg.sender}`;
            
            const time = msg.timestamp.toLocaleTimeString('ru-RU', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            messageDiv.innerHTML = `
                <div class="message-content">${this.formatMessage(msg.text)}</div>
                <div class="message-time">${time}</div>
            `;
            
            messagesContainer.appendChild(messageDiv);
        });

        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    formatMessage(text) {
        return text.replace(/\n/g, '<br>');
    }

    sendMessage() {
        const input = document.querySelector('.chat-bot-input input');
        const message = input.value.trim();

        if (message) {
            this.addMessage('user', message);
            input.value = '';

            setTimeout(() => {
                const response = this.generateSmartResponse(message);
                this.addMessage('bot', response);
            }, 1000 + Math.random() * 1000);
        }
    }

    generateSmartResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        for (const [topic, data] of Object.entries(this.knowledgeBase)) {
            for (const pattern of data.patterns) {
                if (lowerMessage.includes(pattern)) {
                    if (lowerMessage.includes('план') || lowerMessage.includes('обучен') || lowerMessage.includes('изуч')) {
                        return data.learning;
                    }
                    return data.responses[Math.floor(Math.random() * data.responses.length)];
                }
            }
        }

        return this.generateAIPatternResponse(lowerMessage);
    }

    generateAIPatternResponse(message) {
        const patterns = {
            'как.*научиться': 'Начни с основ! HTML → CSS → JavaScript. Практикуйся каждый день и делай небольшие проекты. 🚀',
            'сколько.*времени': 'Основы можно освоить за 2-3 месяца. Чтобы стать уверенным разработчиком - 1-2 года практики. ⏱️',
            'лучший.*язык': 'Каждый язык хорош для своих задач. Для веба - JavaScript, для данных - Python, для мобилки - Kotlin/Swift. 💫',
            'с чего.*начать': 'Начни с HTML/CSS, затем JavaScript. Делай практические проекты и не бойся ошибаться! 🌟',
            'как.*быстро': 'Учись регулярно, практикуйся на реальных проектах, участвуй в сообществах. Скорость придет с опытом! ⚡',
            'почему.*не.*получается': 'Программирование - это навык! Все начинают с ошибок. Продолжай практиковаться и анализировать ошибки. 💪'
        };

        for (const [pattern, response] of Object.entries(patterns)) {
            if (new RegExp(pattern).test(message)) {
                return response;
            }
        }

        const defaultResponses = [
            'Интересный вопрос! Попробуй сформулировать его более конкретно, и я постараюсь помочь. 🤔',
            'Пока я специализируюсь на программировании. Спроси о HTML, CSS, JavaScript или Python! 💻',
            'Хочешь, составлю для тебя индивидуальный план обучения? Просто спроси "план обучения"! 📚',
            'Рекомендую начать с основ веб-разработки: HTML → CSS → JavaScript. Это отличный старт! 🚀'
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Система переключения темы
class ThemeSwitcher {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.createSwitcherHTML();
        this.setupEventListeners();
        this.applyTheme(this.currentTheme);
    }

    createSwitcherHTML() {
        const switcherHTML = `
            <div class="theme-switcher">
                <button class="theme-toggle" id="themeToggle">🌙</button>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', switcherHTML);
    }

    setupEventListeners() {
        const toggleBtn = document.getElementById('themeToggle');
        toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const toggleBtn = document.getElementById('themeToggle');
        toggleBtn.textContent = theme === 'light' ? '🌙' : '☀️';
        
        toggleBtn.style.transform = 'scale(1.2) rotate(180deg)';
        setTimeout(() => {
            toggleBtn.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }
}

// Умный поиск с "нейросетью"
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput && searchBtn) {
        function performSearch() {
            const query = searchInput.value.trim().toLowerCase();
            if (query === '') {
                searchResults.innerHTML = '';
                searchResults.classList.remove('active');
                return;
            }
            
            const smartResults = generateSmartSearchResults(query);
            displaySearchResults(smartResults, query);
        }
        
        function generateSmartSearchResults(query) {
            const knowledgeBase = {
                'python': {
                    title: 'Изучение Python с нуля',
                    description: 'Полный курс Python для начинающих с примерами и практическими заданиями',
                    type: 'курс',
                    difficulty: 'начальный',
                    duration: '4 недели'
                },
                'html': {
                    title: 'HTML для начинающих',
                    description: 'Основы верстки и создание первой веб-страницы',
                    type: 'руководство',
                    difficulty: 'начальный',
                    duration: '1 неделя'
                },
                'javascript': {
                    title: 'JavaScript основы',
                    description: 'Интерактивность на веб-страницах с JavaScript',
                    type: 'курс',
                    difficulty: 'начальный',
                    duration: '3 недели'
                },
                'css': {
                    title: 'CSS и дизайн',
                    description: 'Создание красивых интерфейсов с CSS',
                    type: 'руководство',
                    difficulty: 'начальный',
                    duration: '2 недели'
                },
                'быстро': {
                    title: 'Ускоренное обучение',
                    description: 'Интенсивный курс по основам программирования',
                    type: 'интенсив',
                    difficulty: 'начальный',
                    duration: '24 часа'
                }
            };

            const results = [];
            
            Object.entries(knowledgeBase).forEach(([keyword, data]) => {
                if (query.includes(keyword)) {
                    results.push({
                        title: data.title,
                        description: data.description,
                        type: data.type,
                        difficulty: data.difficulty,
                        duration: data.duration,
                        relevance: 100
                    });
                }
            });

            if (results.length > 0) {
                return results;
            }

            if (query.includes('научиться') || query.includes('обучение') || query.includes('изучить')) {
                return [{
                    title: '🚀 Персональный план обучения',
                    description: 'Я подобрал для вас оптимальный путь изучения программирования на основе вашего запроса',
                    type: 'персональный план',
                    difficulty: 'любой',
                    duration: 'индивидуально',
                    relevance: 95
                }];
            }

            if (query.includes('быстро') || query.includes('24 часа') || query.includes('ускорен')) {
                return [{
                    title: '⚡ Ускоренный курс за 24 часа',
                    description: 'Интенсивное обучение основам программирования с максимальной эффективностью',
                    type: 'интенсив',
                    difficulty: 'начальный',
                    duration: '24 часа',
                    relevance: 90
                }];
            }

            return [{
                title: '💡 Рекомендации по вашему запросу',
                description: `На основе анализа "${query}" рекомендую начать с основ программирования и HTML/CSS`,
                type: 'рекомендация',
                difficulty: 'начальный',
                duration: '2-4 недели',
                relevance: 80
            }];
        }

        function displaySearchResults(results, query) {
            searchResults.innerHTML = '';
            
            if (results.length === 0) {
                searchResults.innerHTML = `
                    <div class="search-result-card">
                        <h3>Ничего не найдено</h3>
                        <p>Попробуйте изменить запрос или спросите у умного помощника</p>
                    </div>
                `;
            } else {
                results.forEach(result => {
                    const resultHTML = `
                        <div class="search-result-card">
                            <div class="search-result-header">
                                <h3>${result.title}</h3>
                                <span class="search-badge ${result.type}">${result.type}</span>
                            </div>
                            <p>${result.description}</p>
                            <div class="search-result-meta">
                                <span class="difficulty ${result.difficulty}">${result.difficulty}</span>
                                <span class="duration">⏱️ ${result.duration}</span>
                                <span class="relevance">🎯 ${result.relevance}% релевантности</span>
                            </div>
                            <div class="search-result-actions">
                                <button class="btn btn-outline">👁️ Посмотреть</button>
                                <button class="btn btn-primary">🎯 Начать обучение</button>
                            </div>
                        </div>
                    `;
                    searchResults.insertAdjacentHTML('beforeend', resultHTML);
                });
            }
            
            searchResults.classList.add('active');
        }
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Система рейтинга
class RatingSystem {
    constructor() {
        this.ratings = JSON.parse(localStorage.getItem('taskRatings')) || {};
    }

    init() {
        this.setupRatingListeners();
    }

    setupRatingListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('rating-star')) {
                const taskId = e.target.closest('[data-task]').getAttribute('data-task');
                const rating = parseInt(e.target.getAttribute('data-rating'));
                this.setRating(taskId, rating);
            }
        });
    }

    setRating(taskId, rating) {
        if (!this.ratings[taskId]) {
            this.ratings[taskId] = { rating, count: 1 };
        } else {
            this.ratings[taskId].rating = rating;
        }

        localStorage.setItem('taskRatings', JSON.stringify(this.ratings));
        this.updateRatingDisplay(taskId);
        
        achievementsSystem.checkRatingAchievements();
    }

    updateRatingDisplay(taskId) {
        const ratingElement = document.querySelector(`[data-task="${taskId}"] .rating-system`);
        if (ratingElement && this.ratings[taskId]) {
            const stars = ratingElement.querySelectorAll('.rating-star');
            const rating = this.ratings[taskId].rating;

            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }
    }

    getAverageRating(taskId) {
        return this.ratings[taskId] ? this.ratings[taskId].rating : 0;
    }
}

// Система достижений
class AchievementsSystem {
    constructor() {
        this.achievements = JSON.parse(localStorage.getItem('achievements')) || {
            firstCode: { name: "Первый код", desc: "Напишите свою первую программу", earned: false },
            fiveTasks: { name: "Решатель", desc: "Выполните 5 задач", earned: false },
            cssMaster: { name: "Мастер CSS", desc: "Получите 5 звезд за CSS задачу", earned: false },
            communityHelper: { name: "Помощник сообщества", desc: "Добавьте 3 своих кода", earned: false },
            codeExplorer: { name: "Исследователь кода", desc: "Сохраните 10 примеров", earned: false }
        };
    }

    init() {
        this.createAchievementsHTML();
        this.setupEventListeners();
        this.updateAchievementsDisplay();
    }

    createAchievementsHTML() {
        const achievementsHTML = `
            <div class="achievements-system">
                <button class="achievements-toggle">
                    🏆 Достижения
                    <span id="achievementsCount">0</span>
                </button>
                <div class="achievements-panel">
                    <h4>Ваши достижения</h4>
                    <div id="achievementsList"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', achievementsHTML);
    }

    setupEventListeners() {
        const toggleBtn = document.querySelector('.achievements-toggle');
        const panel = document.querySelector('.achievements-panel');

        toggleBtn.addEventListener('click', () => {
            panel.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.achievements-system')) {
                panel.classList.remove('active');
            }
        });
    }

    updateAchievementsDisplay() {
        const list = document.getElementById('achievementsList');
        const count = document.getElementById('achievementsCount');
        
        let earnedCount = 0;
        list.innerHTML = '';

        Object.entries(this.achievements).forEach(([key, achievement]) => {
            const achievementHTML = `
                <div class="achievement-item ${achievement.earned ? '' : 'locked'}">
                    <div class="achievement-icon">${achievement.earned ? '🏆' : '🔒'}</div>
                    <div class="achievement-info">
                        <div class="achievement-name">${achievement.name}</div>
                        <div class="achievement-desc">${achievement.desc}</div>
                    </div>
                </div>
            `;
            list.insertAdjacentHTML('beforeend', achievementHTML);

            if (achievement.earned) earnedCount++;
        });

        count.textContent = earnedCount;
    }

    unlockAchievement(achievementKey) {
        if (this.achievements[achievementKey] && !this.achievements[achievementKey].earned) {
            this.achievements[achievementKey].earned = true;
            localStorage.setItem('achievements', JSON.stringify(this.achievements));
            this.updateAchievementsDisplay();
            this.showAchievementNotification(this.achievements[achievementKey].name);
        }
    }

    showAchievementNotification(achievementName) {
        const notification = document.createElement('div');
        notification.className = 'achievement-unlocked';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--gradient);
            color: white;
            padding: 2rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            text-align: center;
            font-weight: 600;
            font-size: 1.25rem;
        `;
        notification.innerHTML = `🏆 Достижение разблокировано!<br>${achievementName}`;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    checkRatingAchievements() {
        const ratings = JSON.parse(localStorage.getItem('taskRatings')) || {};
        const cssTasks = Object.keys(ratings).filter(taskId => 
            document.querySelector(`[data-task="${taskId}"] .subject`)?.textContent === 'CSS'
        );
        
        const hasFiveStarCss = cssTasks.some(taskId => ratings[taskId].rating === 5);
        if (hasFiveStarCss) {
            this.unlockAchievement('cssMaster');
        }
    }
}

// Система добавления кодов сообщества с улучшенным процессом публикации
class CommunityCodes {
    constructor() {
        this.codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
    }

    init() {
        this.setupForm();
        this.loadCommunityCodes();
        this.setupFilters();
    }

    setupForm() {
        const form = document.getElementById('addCodeForm');
        const previewBtn = document.getElementById('previewBtn');
        const languageSelect = document.getElementById('programmingLanguage');
        const codeContent = document.getElementById('codeContent');

        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        if (previewBtn) {
            previewBtn.addEventListener('click', () => this.showPreview());
        }

        if (languageSelect && codeContent) {
            languageSelect.addEventListener('change', () => {
                this.updateFileName(languageSelect.value);
            });
        }

        const copyBtn = document.querySelector('.copy-editor-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(codeContent.value).then(() => {
                    copyBtn.textContent = 'Скопировано!';
                    setTimeout(() => {
                        copyBtn.textContent = 'Копировать';
                    }, 2000);
                });
            });
        }
    }

    updateFileName(language) {
        const fileName = document.getElementById('fileName');
        const extensions = {
            'html': 'index.html',
            'css': 'style.css',
            'javascript': 'script.js',
            'python': 'program.py',
            'other': 'code.txt'
        };
        fileName.textContent = extensions[language] || 'code.txt';
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const codeData = {
            id: Date.now().toString(),
            title: formData.get('codeTitle'),
            description: formData.get('codeDescription'),
            language: formData.get('programmingLanguage'),
            code: formData.get('codeContent'),
            author: formData.get('authorName'),
            difficulty: formData.get('difficulty'),
            date: new Date().toISOString(),
            likes: 0
        };

        this.codes.unshift(codeData);
        localStorage.setItem('communityCodes', JSON.stringify(this.codes));
        
        this.showSuccessModal();
        e.target.reset();
        this.loadCommunityCodes();
        
        achievementsSystem.unlockAchievement('firstCode');
        if (this.codes.length >= 3) {
            achievementsSystem.unlockAchievement('communityHelper');
        }
    }

    showSuccessModal() {
        const modal = document.getElementById('successModal');
        const goToCommunityBtn = document.getElementById('goToCommunityBtn');
        const addAnotherBtn = document.getElementById('addAnotherBtn');

        modal.style.display = 'block';

        goToCommunityBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            window.location.href = 'community.html';
        });

        addAnotherBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.getElementById('addCodeForm').reset();
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    loadCommunityCodes() {
        const container = document.getElementById('communityCodesList');
        const emptyState = document.getElementById('communityEmpty');
        
        if (!container) return;

        if (this.codes.length === 0) {
            container.innerHTML = '';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';

        container.innerHTML = this.codes.map(code => `
            <div class="community-code-card">
                <div class="community-code-header">
                    <h3 class="community-code-title">${code.title}</h3>
                    <span class="difficulty-badge ${code.difficulty}">
                        ${code.difficulty === 'easy' ? '👶' : code.difficulty === 'medium' ? '👍' : '🔥'} 
                        ${code.difficulty === 'easy' ? 'Легко' : code.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                    </span>
                </div>
                <div class="community-code-meta">
                    <span class="subject">${code.language.toUpperCase()}</span>
                    <span class="community-code-author">👤 ${code.author}</span>
                    <span class="community-code-date">📅 ${new Date(code.date).toLocaleDateString()}</span>
                </div>
                <p class="community-code-description">${code.description}</p>
                <div class="community-code-content">
                    <pre><code>${this.escapeHtml(code.code)}</code></pre>
                </div>
                <div class="community-code-actions">
                    <button class="btn btn-outline like-btn" data-id="${code.id}">
                        <span>❤️</span> Нравится (${code.likes})
                    </button>
                    <button class="btn btn-outline copy-community-btn" data-code="${this.escapeHtml(code.code)}">
                        <span>📋</span> Копировать
                    </button>
                </div>
            </div>
        `).join('');

        this.setupCommunityButtons();
    }

    setupCommunityButtons() {
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const codeId = btn.getAttribute('data-id');
                this.likeCode(codeId);
            });
        });

        document.querySelectorAll('.copy-community-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const code = btn.getAttribute('data-code');
                navigator.clipboard.writeText(code).then(() => {
                    btn.innerHTML = '<span>✅</span> Скопировано!';
                    setTimeout(() => {
                        btn.innerHTML = '<span>📋</span> Копировать';
                    }, 2000);
                });
            });
        });
    }

    likeCode(codeId) {
        const code = this.codes.find(c => c.id === codeId);
        if (code) {
            code.likes++;
            localStorage.setItem('communityCodes', JSON.stringify(this.codes));
            this.loadCommunityCodes();
        }
    }

    setupFilters() {
        const sortSelect = document.getElementById('sortCodes');
        const filterSelect = document.getElementById('filterLanguage');

        if (sortSelect) {
            sortSelect.addEventListener('change', () => this.applyFilters());
        }

        if (filterSelect) {
            filterSelect.addEventListener('change', () => this.applyFilters());
        }
    }

    applyFilters() {
        const sortBy = document.getElementById('sortCodes').value;
        const filterBy = document.getElementById('filterLanguage').value;

        let filteredCodes = [...this.codes];

        if (filterBy !== 'all') {
            filteredCodes = filteredCodes.filter(code => code.language === filterBy);
        }

        switch (sortBy) {
            case 'newest':
                filteredCodes.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                filteredCodes.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'popular':
                filteredCodes.sort((a, b) => b.likes - a.likes);
                break;
        }

        const tempCodes = this.codes;
        this.codes = filteredCodes;
        this.loadCommunityCodes();
        this.codes = tempCodes;
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    showPreview() {
        const formData = new FormData(document.getElementById('addCodeForm'));
        const modal = document.getElementById('previewModal');
        const content = document.getElementById('previewContent');

        const previewHTML = `
            <div class="modal-solution">
                <h2>${formData.get('codeTitle') || 'Без названия'}</h2>
                <div class="community-code-meta">
                    <span class="subject">${(formData.get('programmingLanguage') || 'other').toUpperCase()}</span>
                    <span class="difficulty-badge ${formData.get('difficulty') || 'medium'}">
                        ${formData.get('difficulty') === 'easy' ? '👶 Легко' : 
                          formData.get('difficulty') === 'hard' ? '🔥 Сложно' : '👍 Средне'}
                    </span>
                </div>
                <p><strong>Автор:</strong> ${formData.get('authorName') || 'Аноним'}</p>
                <p><strong>Описание:</strong> ${formData.get('codeDescription') || 'Нет описания'}</p>
                <div class="code-preview">
                    <pre><code>${this.escapeHtml(formData.get('codeContent') || '// Код не введен')}</code></pre>
                </div>
            </div>
        `;

        content.innerHTML = previewHTML;
        modal.style.display = 'block';
    }
}

// Функции для модального окна
function initModal() {
    const modal = document.getElementById('solutionModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modalBody');
    const viewSolutionBtns = document.querySelectorAll('.view-solution-btn');

    function openModal(taskId) {
        const explanation = taskExplanations[taskId];
        if (explanation) {
            modalBody.innerHTML = `
                <div class="modal-solution">
                    ${explanation.content}
                </div>
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    viewSolutionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const taskId = this.getAttribute('data-task');
            openModal(taskId);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Функции для копирования кода
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeId = this.getAttribute('data-code');
            const codeElement = document.getElementById(codeId);
            const codeText = codeElement.textContent;
            
            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Скопировано!';
                this.style.background = '#10b981';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
                alert('Не удалось скопировать код');
            });
        });
    });
}

// Функции для сохранения задач
function initTaskSaving() {
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskId = this.getAttribute('data-task');
            const taskCard = this.closest('.task-card');
            const taskTitle = taskCard.querySelector('h3').textContent;
            const taskDescription = taskCard.querySelector('p').textContent;
            
            const task = {
                id: taskId,
                title: taskTitle,
                description: taskDescription,
                type: 'task'
            };
            
            let savedTasks = JSON.parse(localStorage.getItem('savedTasks')) || [];
            
            if (!savedTasks.some(t => t.id === taskId)) {
                savedTasks.push(task);
                localStorage.setItem('savedTasks', JSON.stringify(savedTasks));
                alert('Задача сохранена в избранное!');
                this.innerHTML = '<span>💾</span> Сохранено';
                this.classList.add('saved');
            } else {
                alert('Эта задача уже сохранена!');
            }
        });
    });
}

// Функции для анимаций
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const cards = document.querySelectorAll('.task-card, .resource-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Функции для страницы примеров кода
function initExamplesPage() {
    const saveCodeButtons = document.querySelectorAll('.save-code-btn');
    saveCodeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exampleId = this.getAttribute('data-example');
            const exampleCard = this.closest('.example-card');
            const exampleTitle = exampleCard.querySelector('h3').textContent;
            const exampleDescription = exampleCard.querySelector('p').textContent;
            
            const example = {
                id: exampleId,
                title: exampleTitle,
                description: exampleDescription,
                type: 'example'
            };
            
            let savedExamples = JSON.parse(localStorage.getItem('savedExamples')) || [];
            
            if (!savedExamples.some(ex => ex.id === exampleId)) {
                savedExamples.push(example);
                localStorage.setItem('savedExamples', JSON.stringify(savedExamples));
                alert('Пример кода сохранен в избранное!');
                this.innerHTML = '<span>💾</span> Сохранено';
                this.classList.add('saved');
            } else {
                alert('Этот пример кода уже сохранен!');
            }
        });
    });
    
    const modalDemo = document.getElementById('myModalDemo');
    const openModalBtn = document.getElementById('openModalDemo');
    const closeModalBtn = document.querySelector('.close-demo');
    
    if (openModalBtn && modalDemo && closeModalBtn) {
        openModalBtn.addEventListener('click', function() {
            modalDemo.style.display = 'block';
        });
        
        closeModalBtn.addEventListener('click', function() {
            modalDemo.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target == modalDemo) {
                modalDemo.style.display = 'none';
            }
        });
    }
    
    initCopyButtons();
    initScrollAnimations();
}

// Функции для страницы сохраненных материалов
function initSavedPage() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
            
            loadSavedContent(tabId);
        });
    });
    
    function loadSavedContent(type) {
        const savedTasksList = document.getElementById('saved-tasks-list');
        const savedExamplesList = document.getElementById('saved-examples-list');
        const tasksEmpty = document.getElementById('tasks-empty');
        const examplesEmpty = document.getElementById('examples-empty');
        
        if (type === 'tasks') {
            const savedTasks = getSavedItems('savedTasks');
            displaySavedItems(savedTasks, savedTasksList, 'task');
            
            if (savedTasks.length === 0) {
                tasksEmpty.style.display = 'block';
            } else {
                tasksEmpty.style.display = 'none';
            }
        } else if (type === 'examples') {
            const savedExamples = getSavedItems('savedExamples');
            displaySavedItems(savedExamples, savedExamplesList, 'example');
            
            if (savedExamples.length === 0) {
                examplesEmpty.style.display = 'block';
            } else {
                examplesEmpty.style.display = 'none';
            }
        }
    }
    
    function displaySavedItems(items, container, type) {
        container.innerHTML = '';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'saved-item';
            itemElement.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <button class="remove-btn" data-id="${item.id}" data-type="${type}">×</button>
            `;
            container.appendChild(itemElement);
        });
        
        const removeButtons = container.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const type = this.getAttribute('data-type');
                const storageKey = type === 'task' ? 'savedTasks' : 'savedExamples';
                
                if (confirm('Удалить этот элемент из сохраненных?')) {
                    removeFromLocalStorage(storageKey, id);
                    loadSavedContent(type + 's');
                }
            });
        });
    }
    
    loadSavedContent('tasks');
    initScrollAnimations();
}

// Функции для страницы сообщества
function initCommunityPage() {
    loadCommunityFeed();
    setupCommunityFilters();
    updateCommunityStats();
}

function loadCommunityFeed() {
    const feed = document.getElementById('communityFeed');
    const emptyState = document.getElementById('communityEmpty');
    const codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
    
    if (codes.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (feed) feed.innerHTML = '';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    
    feed.innerHTML = codes.map(code => `
        <div class="community-code-item">
            <div class="community-code-header">
                <h3 class="community-code-title">${code.title}</h3>
                <span class="difficulty-badge ${code.difficulty}">
                    ${code.difficulty === 'easy' ? '👶' : code.difficulty === 'medium' ? '👍' : '🔥'} 
                    ${code.difficulty === 'easy' ? 'Легко' : code.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                </span>
            </div>
            
            <div class="community-code-meta">
                <span class="subject">${code.language.toUpperCase()}</span>
                <span class="community-code-author">
                    👤 ${code.author}
                </span>
                <span class="community-code-date">
                    📅 ${new Date(code.date).toLocaleDateString()}
                </span>
            </div>
            
            <p class="community-code-description">${code.description}</p>
            
            <div class="community-code-stats">
                <div class="community-code-stat">
                    <span>❤️</span> ${code.likes} лайков
                </div>
                <div class="community-code-stat">
                    <span>👁️</span> ${Math.floor(Math.random() * 100)} просмотров
                </div>
            </div>
            
            <div class="code-preview">
                <pre><code>${escapeHtml(code.code.substring(0, 300))}${code.code.length > 300 ? '...' : ''}</code></pre>
            </div>
            
            <div class="community-code-actions">
                <button class="btn btn-primary like-community-btn" data-id="${code.id}">
                    <span>❤️</span> Нравится (${code.likes})
                </button>
                <button class="btn btn-outline view-full-btn" data-id="${code.id}">
                    <span>👁️</span> Смотреть полностью
                </button>
                <button class="btn btn-outline copy-community-btn" data-code="${escapeHtml(code.code)}">
                    <span>📋</span> Копировать
                </button>
            </div>
        </div>
    `).join('');
    
    setupCommunityButtons();
}

function setupCommunityFilters() {
    const sortSelect = document.getElementById('communitySort');
    const languageSelect = document.getElementById('communityLanguage');
    const difficultySelect = document.getElementById('communityDifficulty');
    
    [sortSelect, languageSelect, difficultySelect].forEach(select => {
        if (select) {
            select.addEventListener('change', applyCommunityFilters);
        }
    });
}

function applyCommunityFilters() {
    const sortBy = document.getElementById('communitySort').value;
    const filterLanguage = document.getElementById('communityLanguage').value;
    const filterDifficulty = document.getElementById('communityDifficulty').value;
    
    let codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
    
    if (filterLanguage !== 'all') {
        codes = codes.filter(code => code.language === filterLanguage);
    }
    
    if (filterDifficulty !== 'all') {
        codes = codes.filter(code => code.difficulty === filterDifficulty);
    }
    
    switch (sortBy) {
        case 'newest':
            codes.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'popular':
            codes.sort((a, b) => b.likes - a.likes);
            break;
        case 'difficulty':
            const difficultyOrder = { 'hard': 3, 'medium': 2, 'easy': 1 };
            codes.sort((a, b) => difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty]);
            break;
    }
    
    const temp = JSON.parse(localStorage.getItem('communityCodes')) || [];
    localStorage.setItem('communityCodes_temp', JSON.stringify(codes));
    loadCommunityFeed();
    localStorage.setItem('communityCodes', JSON.stringify(temp));
}

function setupCommunityButtons() {
    document.querySelectorAll('.like-community-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const codeId = this.getAttribute('data-id');
            likeCommunityCode(codeId);
        });
    });
    
    document.querySelectorAll('.copy-community-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            navigator.clipboard.writeText(code).then(() => {
                this.innerHTML = '<span>✅</span> Скопировано!';
                setTimeout(() => {
                    this.innerHTML = '<span>📋</span> Копировать';
                }, 2000);
            });
        });
    });
}

function likeCommunityCode(codeId) {
    let codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
    const code = codes.find(c => c.id === codeId);
    
    if (code) {
        code.likes++;
        localStorage.setItem('communityCodes', JSON.stringify(codes));
        loadCommunityFeed();
        updateCommunityStats();
    }
}

function updateCommunityStats() {
    const codes = JSON.parse(localStorage.getItem('communityCodes')) || [];
    const authors = new Set(codes.map(code => code.author));
    const totalLikes = codes.reduce((sum, code) => sum + code.likes, 0);
    
    document.getElementById('totalCodes').textContent = codes.length;
    document.getElementById('totalAuthors').textContent = authors.size;
    document.getElementById('totalLikes').textContent = totalLikes;
}

// Вспомогательные функции
function saveToLocalStorage(key, item) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    
    if (!savedItems.some(savedItem => savedItem.id === item.id)) {
        savedItems.push(item);
        localStorage.setItem(key, JSON.stringify(savedItems));
        return true;
    }
    return false;
}

function removeFromLocalStorage(key, id) {
    let savedItems = JSON.parse(localStorage.getItem(key)) || [];
    savedItems = savedItems.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(savedItems));
}

function getSavedItems(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Функция для добавления рейтинга к задачам
function addRatingToTasks() {
    const taskCards = document.querySelectorAll('.task-card');
    
    taskCards.forEach(card => {
        const taskId = card.querySelector('.save-btn').getAttribute('data-task');
        const ratingHTML = `
            <div class="rating-system">
                <button class="rating-star" data-rating="1">⭐</button>
                <button class="rating-star" data-rating="2">⭐</button>
                <button class="rating-star" data-rating="3">⭐</button>
                <button class="rating-star" data-rating="4">⭐</button>
                <button class="rating-star" data-rating="5">⭐</button>
                <span class="rating-value">Оцените задачу</span>
            </div>
        `;
        
        const taskMeta = card.querySelector('.task-meta');
        if (taskMeta) {
            taskMeta.insertAdjacentHTML('afterend', ratingHTML);
        }
    });
}

// Функция для инициализации рейтинга на главной странице
function initRatingSystem() {
    const ratingSystems = document.querySelectorAll('.rating-system');
    
    ratingSystems.forEach(system => {
        const stars = system.querySelectorAll('.rating-star');
        const taskCard = system.closest('.task-card');
        const taskId = taskCard.querySelector('.save-btn').getAttribute('data-task');
        
        const savedRatings = JSON.parse(localStorage.getItem('taskRatings')) || {};
        const savedRating = savedRatings[taskId];
        
        if (savedRating) {
            stars.forEach((star, index) => {
                if (index < savedRating.rating) {
                    star.classList.add('active');
                }
            });
        }
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const rating = index + 1;
                
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                
                const ratings = JSON.parse(localStorage.getItem('taskRatings')) || {};
                ratings[taskId] = { rating: rating, count: 1 };
                localStorage.setItem('taskRatings', JSON.stringify(ratings));
                
                achievementsSystem.checkRatingAchievements();
            });
        });
    });
}

// Главная функция инициализации для index.html
function initIndexPage() {
    initSearch();
    initTaskSaving();
    initCopyButtons();
    initModal();
    initScrollAnimations();
    initRatingSystem();
}

// Главная функция инициализации
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const page = path.split('/').pop();

    // Инициализация общих систем
    const smartChatBot = new SmartChatBot();
    const themeSwitcher = new ThemeSwitcher();
    const ratingSystem = new RatingSystem();
    const achievementsSystem = new AchievementsSystem();
    const communityCodes = new CommunityCodes();

    // Инициализация страниц
    if (page === 'index.html' || page === '' || page === '/') {
        initIndexPage();
        ratingSystem.init();
    } else if (page === '2str.html') {
        initExamplesPage();
    } else if (page === '3str.html') {
        initSavedPage();
    } else if (page === '4str.html') {
        communityCodes.init();
    } else if (page === 'community.html') {
        initCommunityPage();
    }

    achievementsSystem.init();
    initScrollAnimations();
});


// Улучшения для мобильных устройств
function initMobileOptimizations() {
    // Предотвращаем масштабирование при фокусе на инпуты
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Добавляем небольшую задержку для лучшего UX
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        });
    });
    
    // Улучшаем работу тач-событий
    document.addEventListener('touchstart', function() {}, {passive: true});
    
    // Предотвращаем bounce-эффект на iOS
    document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Оптимизация для медленных соединений
    if (navigator.connection) {
        const connection = navigator.connection;
        if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            // Упрощаем анимации для медленных соединений
            document.documentElement.style.setProperty('--animation-duration', '0.1s');
        }
    }
}

// Добавь вызов в главную функцию инициализации
document.addEventListener('DOMContentLoaded', function() {
    // ... существующий код ...
    
    initMobileOptimizations();
});