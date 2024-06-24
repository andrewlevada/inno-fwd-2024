const bio = document.querySelector('#about #bio') as HTMLElement | null;
const button = document.querySelector('#about button') as HTMLButtonElement | null;

if (button) button.addEventListener('click', () => {
  bio!.classList.toggle('hidden');
  button!.textContent = bio!.classList.contains('hidden') ? 'Show more...' : 'Show less';
});
