const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const profileArray = [];

  // Access values employee entered
  const profilePic = document.querySelector('.profile-picture').value;
  const fullName = document.querySelector('.fullName').value;
  const email = document.querySelector('.email').value;
  const department = document.querySelector('#department').value;
  const jobTitle = document.querySelector('.jobTitle').value;
  const startDate = document.querySelector('.startDate').value;
  const employmentId = document.querySelector('.employmentId').value;

  const employeePicDiv = document.querySelector('.user-avator');
  const employeePic = document.createElement('img');
  employeePic.className = 'employeePicture';
  employeePic.src = `image/${profilePic}`;
  employeePicDiv.appendChild(employeePic);

  // push to profileArray
  profileArray.push(profilePic);
  profileArray.push(fullName);
  profileArray.push(email);
  profileArray.push(department);
  profileArray.push(jobTitle);
  profileArray.push(startDate);
  profileArray.push(employmentId);

  console.log(profileArray);
});
