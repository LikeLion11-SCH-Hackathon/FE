import axios from "axios";

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 폼 제출 동작 중지

  const formData = new FormData(event.target); // 폼 데이터 가져오기

  axios.post('http://118.67.134.90:18080/', formData)
    .then(response => {
      console.log('Data submitted:', response.data);
      // 서버 응답에 대한 처리
    })
    .catch(error => {
      console.error('Error submitting data:', error);
      // 에러 처리
    });
});

axios.get('http://118.67.134.90:18080/')
  .then(response => {
    const dataElement = document.getElementById('data-container');
    dataElement.textContent = response.data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });