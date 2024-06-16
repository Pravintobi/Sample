const data = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
    "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
    "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"
];

const itemsPerPage = 5;
let currentPage = 1;

function renderContent() {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const currentItems = data.slice(start, end);
    currentItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'content';
        div.textContent = item;
        contentContainer.appendChild(div);
    });

    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(element => {
        element.style.display = 'block';
    });
}

function renderPagination() {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';

    const pageCount = Math.ceil(data.length / itemsPerPage);
    
    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            renderContent();
            renderPagination();
        });
        paginationControls.appendChild(button);
    }
}

function initializePagination() {
    renderContent();
    renderPagination();
}

initializePagination();