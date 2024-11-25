document.addEventListener('DOMContentLoaded', () => {
    const skillLevels = document.querySelectorAll('.skill-level');

    const animateSkillLevels = () => {
        skillLevels.forEach(level => {
            const targetWidth = level.getAttribute('data-level') + '%';
            level.style.width = targetWidth;
        });
    };

    // Animate skill levels when the skills section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateSkillLevels();
            observer.disconnect();
        }
    });

    observer.observe(skillsSection);
});

