export const initWorkGrid = async () => {
    const response = await fetch('/content/projects.json');
    const projects = await response.json();
    
    const gridContainer = document.getElementById('work');
    if (!gridContainer) return;

    gridContainer.innerHTML = projects.map(project => `
        <div class="work-row" data-id="${project.id}">
            <h2>${project.title}</h2>
            <div class="tags">${project.tags.join(' & ')}</div>
        </div>
    `).join('');
};
