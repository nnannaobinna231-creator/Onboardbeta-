const form = document.querySelector('.form');
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
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  imageInput.value;
  const fullName = document.querySelector('.fullName').value;
  const department = document.querySelector('.department').value;
  const email = document.querySelector('.email').value;
  const jobTile = document.querySelector('.jobTitle').value;
  const StartDate = document.querySelector('.startDate').value;
  const employmentId = document.querySelector('.employmentId').value;
  if (
    !fullName.trim() ||
    !department.trim() ||
    !email.trim() ||
    !jobTile.trim() ||
    !StartDate.trim() ||
    !employmentId.trim()
  )
    try {
      const response = await fetch(
        'https://obb-backend-production.up.railway.app/auth/registe',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/JSON',
          },
          body: JSON.stringify(data),
        }
      );
      const results = response.json();
      console.log(results);
    } catch (error) {
      console.log(error);
    }
});
