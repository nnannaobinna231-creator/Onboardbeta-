const form = document.querySelector('form');
const imageInput = document.querySelector('.image-input');
const imagePreview = document.querySelector('.image-preview');

//upload profile picture
imageInput.addEventListener('change', (e) => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    imagePreview.src = reader.result;
  };
  reader.readAsDataURL(file);
});

//take input from user
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const profileArray = [
    imageInput.value,
    document.querySelector('.fullName').value,
    document.querySelector('.email').value,
    document.querySelector('.department').value,
    document.querySelector('.jobTitle').value,
    document.querySelector('.startDate').value,
    document.querySelector('.employmentId').value,
  ];

  console.log(profileArray);
});
