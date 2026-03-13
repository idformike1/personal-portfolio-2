export const initWorkGrid = async () => {
    const gridContainer = document.getElementById('work') || document.getElementById('work-list');
    if (!gridContainer) return;

    try {
        const response = await fetch('/content/projects.json');
        const projects = await response.json();
        
        gridContainer.innerHTML = projects.map(project => `
            <div class="work-row magnetic" data-id="${project.id}" data-img="${project.thumbnail}">
                <div class="work-row-content">
                    <h2>${project.title}</h2>
                    <div class="tags">${project.tags.join(' & ')}</div>
                </div>
            </div>
        `).join('');
    } catch (err) {
        console.error('Failed to load work grid:', err);
    }
};
