import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <div class="container nav-content">
      <a href="#" class="logo">MyPortfolio</a>
      <nav class="nav-links">
        <a href="#about">Giới thiệu</a>
        <a href="#tasks">Nhiệm vụ</a>
        <a href="#reflection">Tổng kết</a>
      </nav>
    </div>
  </header>

  <main>
    <section id="about" class="hero">
      <div class="container hero-content">
        <img src="/anh.jpg" alt="Trần Huy Hùng" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-bottom: 1.5rem; box-shadow: var(--shadow-md); border: 4px solid var(--primary-color);">
        <h1 class="hero-title">Xin chào, tôi là <span class="highlight">Trần Huy Hùng</span></h1>
        <p class="hero-subtitle">Chào mừng đến với Digital Portfolio của tôi.</p>
        <div class="hero-description" style="text-align: left; background: white; padding: 24px; border-radius: 12px; box-shadow: var(--shadow-sm); border: 1px solid var(--border-color);">
          <p style="margin-bottom: 12px;"><strong>👤 Giới thiệu bản thân:</strong> Xin chào, mình là Trần Huy Hùng, sinh viên lớp IT7 - Khoa Công nghệ Thông tin. Mình là một người đam mê công nghệ và thích khám phá cách công nghệ thay đổi đời sống.</p>
          <p style="margin-bottom: 12px;"><strong>🎯 Mục tiêu học tập:</strong> Áp dụng thành thạo và có đạo đức các công cụ số cùng Trí tuệ nhân tạo (AI) vào quá trình học tập và nghiên cứu, nâng cao hiệu suất làm việc.</p>
          <p><strong>📂 Mục tiêu của Portfolio:</strong> Trang web này tổng hợp các bài tập từ Bài 1 đến Bài 6 của môn học <em>Nhập môn Công nghệ số và ứng dụng AI</em>, nhằm thể hiện quá trình học hỏi và năng lực thực hành của bản thân thành một sản phẩm kỹ thuật số hoàn chỉnh.</p>
        </div>
        <a href="#tasks" class="btn btn-primary">Khám phá các Nhiệm vụ</a>
      </div>
    </section>

    <section id="tasks" class="tasks-section">
      <div class="container">
        <h2 class="section-title">Kết quả Bài tập thành phần</h2>
        <p class="section-subtitle">Dưới đây là các bài tập tôi đã hoàn thành trong khóa học.</p>
        
        <div class="grid">
          <!-- Task 1 -->
          <div class="card" onclick="openModal('modal-task-1')">
            <div class="card-image placeholder-img">Ảnh Bài 1</div>
            <div class="card-content">
              <h3>1. Quản lý tệp và thư mục</h3>
              <p>Thao tác cơ bản với tệp tin và cấu trúc thư mục tối ưu.</p>
            </div>
          </div>
          
          <!-- Task 2 -->
          <div class="card" onclick="openModal('modal-task-2')">
            <div class="card-image placeholder-img">Ảnh Bài 2</div>
            <div class="card-content">
              <h3>2. Tìm kiếm thông tin</h3>
              <p>Sử dụng toán tử tìm kiếm nâng cao và đánh giá thông tin học thuật.</p>
            </div>
          </div>

          <!-- Task 3 -->
          <div class="card" onclick="openModal('modal-task-3')">
            <div class="card-image placeholder-img">Ảnh Bài 3</div>
            <div class="card-content">
              <h3>3. Viết Prompt hiệu quả</h3>
              <p>Kỹ thuật Prompt Engineering cơ bản và nâng cao.</p>
            </div>
          </div>

          <!-- Task 4 -->
          <div class="card" onclick="openModal('modal-task-4')">
            <div class="card-image placeholder-img">Ảnh Bài 4</div>
            <div class="card-content">
              <h3>4. Hợp tác trực tuyến</h3>
              <p>Sử dụng các công cụ quản lý dự án để làm việc nhóm.</p>
            </div>
          </div>

          <!-- Task 5 -->
          <div class="card" onclick="openModal('modal-task-5')">
            <div class="card-image placeholder-img">Ảnh Bài 5</div>
            <div class="card-content">
              <h3>5. Sáng tạo nội dung với AI</h3>
              <p>Ứng dụng AI tạo sinh vào việc xây dựng sản phẩm truyền thông.</p>
            </div>
          </div>

          <!-- Task 6 -->
          <div class="card" onclick="openModal('modal-task-6')">
            <div class="card-image placeholder-img">Ảnh Bài 6</div>
            <div class="card-content">
              <h3>6. AI có trách nhiệm</h3>
              <p>Bộ nguyên tắc sử dụng AI có đạo đức và trách nhiệm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reflection" class="reflection-section">
      <div class="container">
        <h2 class="section-title">Tổng kết và Đánh giá</h2>
        <div class="reflection-box">
          <p><em>[Nội dung tổng kết về những gì đã học, thách thức đã vượt qua, và dự định áp dụng các kỹ năng này vào tương lai...]</em></p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 Trần Huy Hùng. Dự án Nhập môn Công nghệ số.</p>
    </div>
  </footer>

  <!-- Modals for details -->
  <div id="modal-task-1" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-1')">&times;</span>
      <h2>Nhiệm vụ 1: Quản lý tệp và thư mục</h2>
      <p><em>[Chèn nội dung cấu trúc thư mục tối ưu, quy tắc đặt tên, và hình ảnh minh họa vào đây]</em></p>
    </div>
  </div>
  
  <div id="modal-task-2" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-2')">&times;</span>
      <h2>Nhiệm vụ 2: Tìm kiếm và đánh giá thông tin học thuật</h2>
      <p><em>[Trình bày kết quả tìm kiếm, toán tử nâng cao, và đánh giá nguồn tin]</em></p>
    </div>
  </div>

  <div id="modal-task-3" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-3')">&times;</span>
      <h2>Nhiệm vụ 3: Viết Prompt hiệu quả</h2>
      <p><em>[Trình bày Prompt ban đầu, Prompt cải tiến, và so sánh kết quả]</em></p>
    </div>
  </div>

  <div id="modal-task-4" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-4')">&times;</span>
      <h2>Nhiệm vụ 4: Hợp tác trực tuyến</h2>
      <p><em>[Minh chứng sử dụng công cụ quản lý, cách thức phối hợp]</em></p>
    </div>
  </div>

  <div id="modal-task-5" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-5')">&times;</span>
      <h2>Nhiệm vụ 5: Sáng tạo nội dung với AI</h2>
      <p><em>[Trưng bày sản phẩm hoàn thiện, thể hiện sự hỗ trợ của AI]</em></p>
    </div>
  </div>

  <div id="modal-task-6" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-6')">&times;</span>
      <h2>Nhiệm vụ 6: AI có trách nhiệm</h2>
      <p><em>[Trình bày bộ nguyên tắc cá nhân, liên hệ với các nguyên tắc đạo đức]</em></p>
    </div>
  </div>
`

window.openModal = (id) => {
  document.getElementById(id).style.display = "flex";
}
window.closeModal = (id) => {
  document.getElementById(id).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}
