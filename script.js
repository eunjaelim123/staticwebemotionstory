// 스크립트 파일 (script.js)

// 이미지 업로드 미리보기 기능 추가 (이전 내용 유지)

// 기분 선택 기능 추가 (이전 내용 유지)

// 키워드 입력과 표시 기능 추가 (이전 내용 유지)

// Function to handle image preview
function handleImagePreview(event) {
    const fileInput = event.target;
    const previewImage = document.getElementById('preview-image');
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        previewImage.src = e.target.result;
      };
  
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  
  // Attach event listener to the file input
  const imageUpload = document.getElementById('image-upload');
  imageUpload.addEventListener('change', handleImagePreview);


  
// 키워드 추가 기능 추가
function addKeyword() {
    const keywordInput = document.getElementById('keyword-input');
    const keyword = keywordInput.value.trim();
    if (keyword !== '') {
        const tag = document.createElement('span');
        tag.textContent = '#' + keyword;
        const keywordTags = document.getElementById('keyword-tags');
        keywordTags.appendChild(tag);
        keywordInput.value = '';
    }
}

// 일기 생성 기능 추가 (이전 내용 유지)

// 일기 수정 함수 (이전 내용 유지)

// 일기 공유 함수 (이전 내용 유지)

// 추가 버튼 클릭 이벤트 리스너 추가
const addKeywordButton = document.getElementById('add-keyword-button');
if (addKeywordButton) {
    addKeywordButton.addEventListener('click', addKeyword);
}
