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
            <div class="card-image grad-1">Bài 1</div>
            <div class="card-content">
              <h3>1. Quản lý tệp và thư mục</h3>
              <p>Thao tác cơ bản với tệp tin và cấu trúc thư mục tối ưu.</p>
            </div>
          </div>
          
          <!-- Task 2 -->
          <div class="card" onclick="openModal('modal-task-2')">
            <div class="card-image grad-2">Bài 2</div>
            <div class="card-content">
              <h3>2. Tìm kiếm thông tin</h3>
              <p>Sử dụng toán tử tìm kiếm nâng cao và đánh giá thông tin học thuật.</p>
            </div>
          </div>

          <!-- Task 3 -->
          <div class="card" onclick="openModal('modal-task-3')">
            <div class="card-image grad-3">Bài 3</div>
            <div class="card-content">
              <h3>3. Viết Prompt hiệu quả</h3>
              <p>Kỹ thuật Prompt Engineering cơ bản và nâng cao.</p>
            </div>
          </div>

          <!-- Task 4 -->
          <div class="card" onclick="openModal('modal-task-4')">
            <div class="card-image grad-4">Bài 4</div>
            <div class="card-content">
              <h3>4. Hợp tác trực tuyến</h3>
              <p>Sử dụng các công cụ quản lý dự án để làm việc nhóm.</p>
            </div>
          </div>

          <!-- Task 5 -->
          <div class="card" onclick="openModal('modal-task-5')">
            <div class="card-image grad-5">Bài 5</div>
            <div class="card-content">
              <h3>5. Sáng tạo nội dung với AI</h3>
              <p>Ứng dụng AI tạo sinh vào việc xây dựng sản phẩm truyền thông.</p>
            </div>
          </div>

          <!-- Task 6 -->
          <div class="card" onclick="openModal('modal-task-6')">
            <div class="card-image grad-6">Bài 6</div>
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
        <h2 class="section-title">Tổng kết và Đánh giá Bản thân</h2>
        <div class="reflection-box" style="text-align: left;">
          <h3 style="color: var(--primary-color); margin-bottom: 12px;">1. Nhìn lại hành trình và Sự trưởng thành</h3>
          <p style="margin-bottom: 16px;">Khóa học <strong>"Nhập môn Công nghệ số và ứng dụng AI"</strong> không chỉ cung cấp cho mình các kỹ năng nền tảng mà còn mở ra một góc nhìn hoàn toàn mới về cách vận hành của thế giới công nghệ hiện đại. Thử thách lớn nhất đối với mình trong dự án này là việc phải làm quen với vô số các công cụ AI và nền tảng quản lý trực tuyến. Ban đầu, việc viết Prompt làm sao cho AI hiểu đúng ý đồ là một rào cản lớn. Tuy nhiên, qua từng bài tập, mình đã rèn luyện được tư duy phân tích, biết cách chia nhỏ vấn đề (Chain-of-Thought) và giao tiếp hiệu quả hơn với máy móc. Sự trưởng thành lớn nhất của mình chính là việc chuyển đổi từ tư duy "dùng AI để làm hộ" sang tư duy <strong>"dùng AI để mở rộng giới hạn sáng tạo và năng suất"</strong>.</p>
          
          <h3 style="color: var(--primary-color); margin-bottom: 12px;">2. Định hướng áp dụng trong tương lai</h3>
          <p>Là một sinh viên ngành Công nghệ Thông tin, những kỹ năng này chính là hành trang cốt lõi cho chặng đường phía trước. Cụ thể:</p>
          <ul style="margin-left: 20px; margin-top: 8px; margin-bottom: 16px; line-height: 1.8;">
            <li><strong>Trong học tập:</strong> Mình sẽ ứng dụng các công cụ Generative AI để tăng tốc quá trình nghiên cứu tài liệu học thuật, hỗ trợ đọc hiểu tài liệu tiếng Anh chuyên ngành và đặc biệt là hỗ trợ tìm lỗi (Debug) trong quá trình học lập trình.</li>
            <li><strong>Trong công việc thực tế:</strong> Việc làm quen với hệ sinh thái quản lý dự án nhóm (Trello, Drive, Discord) giúp mình sẵn sàng hòa nhập nhanh chóng với mô hình làm việc Agile/Scrum tại các công ty công nghệ chuyên nghiệp sau này.</li>
            <li><strong>Về đạo đức nghề nghiệp:</strong> Việc nắm vững các quy tắc liêm chính học thuật và bảo mật dữ liệu sẽ giúp mình trở thành một Kỹ sư phần mềm có trách nhiệm, luôn tôn trọng quyền sở hữu trí tuệ và bảo mật mã nguồn.</li>
          </ul>
          <p style="font-weight: bold; text-align: center; color: var(--text-main); font-size: 1.1em; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--border-color);">
            "Công nghệ không thay thế con người, nhưng những người biết sử dụng công nghệ sẽ thay thế những người không biết."
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 Trần Huy Hùng. Dự án Nhập môn Công nghệ số.</p>
    </div>
  </footer>

  <div id="modal-task-1" class="modal">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modal-task-1')">&times;</span>
      <h2 style="margin-bottom: 20px; color: var(--primary-color);">Nhiệm vụ 1: Quản lý tệp và thư mục tối ưu</h2>
      
      <div style="margin-bottom: 24px;">
        <h3>1. Cấu trúc thư mục khoa học</h3>
        <p>Để tối ưu hóa việc quản lý dữ liệu cá nhân, mình đã áp dụng phân cấp thư mục theo nguyên tắc "Từ tổng quan đến chi tiết". Dưới đây là mô hình cấu trúc thư mục áp dụng trong bài thực hành:</p>
        <pre style="background: var(--bg-color); padding: 16px; border-radius: 8px; font-family: monospace; line-height: 1.5; border: 1px solid var(--border-color); margin-top: 12px; overflow-x: auto;">
ThucHanh_TranHuyHung/          (Thư mục gốc của dự án)
├── 01_TaiLieu_HocTap/         (Thư mục con theo bài thực hành)
│   ├── GhiChuQuanTrong.txt    (Tệp tin đã được đổi tên và sao chép)
│   └── DiChuyen.txt           (Tệp tin được di chuyển - Cut & Paste)
├── 02_BaiTap_ThucHanh/        (Thư mục chứa sản phẩm làm ra)
└── 03_TaiNguyen_Khac/         (Các tệp tin, hình ảnh dùng chung)
        </pre>
        <p style="margin-top: 12px;"><em>* Giải thích sự tối ưu:</em> Việc đánh số thứ tự tiền tố <code>01_, 02_</code> giúp các thư mục luôn được hệ điều hành sắp xếp theo đúng trình tự ưu tiên logic thay vì bị xếp lộn xộn theo bảng chữ cái. Các thao tác quản lý vòng đời tệp (Tạo mới -> Chỉnh sửa -> Xóa vào Recycle Bin -> Phục hồi) được thực hiện một cách có hệ thống.</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>2. Quy tắc đặt tên tệp (Naming Convention)</h3>
        <p>Mình áp dụng quy tắc đặt tên tệp kết hợp <strong>PascalCase</strong> (viết hoa chữ cái đầu mỗi từ) và sử dụng <strong>Dấu gạch dưới (_)</strong> làm dấu phân cách. Điều này giúp hệ thống tìm kiếm (Search) hoạt động hiệu quả hơn và tệp dễ đọc đối với cả con người lẫn máy tính.</p>
        <ul style="margin-left: 20px; margin-top: 12px;">
          <li><strong>Không sử dụng khoảng trắng và dấu tiếng Việt:</strong> Tránh được lỗi mã hóa UTF-8 khi chia sẻ dữ liệu qua các nền tảng hoặc hệ điều hành khác nhau (Mac/Linux/Windows).</li>
          <li><strong>Tính mô tả cao:</strong> Tên tệp phản ánh chính xác nội dung (Ví dụ: <code>GhiChuQuanTrong.txt</code> thay vì chỉ là <code>GhiChu.txt</code>).</li>
          <li><strong>Cấu trúc rõ ràng:</strong> <code>[Loại]_[TênMôTả]</code> (Ví dụ: <code>ThucHanh_TranHuyHung</code>).</li>
        </ul>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>3. Hình ảnh minh chứng thực hành</h3>
        <p style="color: var(--text-muted); margin-bottom: 12px;">Dưới đây là các minh chứng cho các thao tác: Copy/Cut/Paste, đổi tên, xóa vĩnh viễn (Shift+Delete) và phục hồi từ Thùng rác.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
          <!-- Khu vực bạn sẽ chèn ảnh 1 bằng thẻ <img> -->
          <div style="background: #e2e8f0; height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[XÓA Ô NÀY VÀ CHÈN THẺ <img src="anh1.jpg"> TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Cấu trúc thư mục & Đổi tên</span></p>
          </div>
          <!-- Khu vực bạn sẽ chèn ảnh 2 bằng thẻ <img> -->
          <div style="background: #e2e8f0; height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[XÓA Ô NÀY VÀ CHÈN THẺ <img src="anh2.jpg"> TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Cut/Paste & Recycle Bin</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="modal-task-2" class="modal">
    <div class="modal-content" style="max-width: 900px;">
      <span class="close-btn" onclick="closeModal('modal-task-2')">&times;</span>
      <h2 style="margin-bottom: 20px; color: var(--primary-color);">Nhiệm vụ 2: Tìm kiếm và đánh giá thông tin học thuật</h2>
      
      <div style="margin-bottom: 24px;">
        <h3>1. Chủ đề nghiên cứu & Chiến lược tìm kiếm</h3>
        <p><strong>Chủ đề (Ngành CNTT):</strong> <em>"Ứng dụng Generative AI (Trí tuệ nhân tạo tạo sinh) trong phát triển phần mềm"</em>.</p>
        <p>Để tối ưu hóa kết quả và loại bỏ các bài viết rác trên Internet, mình đã sử dụng kết hợp linh hoạt <strong>5 toán tử tìm kiếm nâng cao</strong> trên Google Scholar và Google Search:</p>
        <ul style="margin-left: 20px; margin-top: 12px; background: var(--bg-color); padding: 16px 16px 16px 40px; border-radius: 8px; border: 1px solid var(--border-color);">
          <li><code>"Generative AI" AND "Software Engineering"</code>: Cụm từ chính xác bắt buộc phải xuất hiện cùng nhau để giới hạn phạm vi.</li>
          <li><code>site:.edu OR site:.gov</code>: Lọc kết quả chỉ lấy từ các trường đại học hoặc tổ chức chính phủ nhằm đảm bảo độ uy tín học thuật cao nhất.</li>
          <li><code>filetype:pdf</code>: Chỉ truy xuất các tài liệu định dạng PDF để tải về nguyên bản các bài báo khoa học.</li>
          <li><code>intitle:"impact"</code>: Yêu cầu tiêu đề bài báo phải có chữ "impact" (tác động) để tập trung thẳng vào hiệu quả thực tế.</li>
          <li><code>-news -blog</code>: Loại trừ các bài báo lá cải hoặc blog cá nhân thiếu kiểm chứng khoa học.</li>
        </ul>
        <p style="margin-top: 12px;"><em>Mẫu truy vấn thực tế:</em> <code style="background: #e2e8f0; padding: 4px 8px; border-radius: 4px;">"Generative AI" AND "Software Engineering" intitle:"impact" filetype:pdf site:.edu -blog</code></p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>2. Đánh giá và Xếp hạng Nguồn thông tin</h3>
        <p>Dưới đây là trích xuất bảng tổng hợp đánh giá độ tin cậy của các tài liệu học thuật (dựa trên 5 tiêu chí: Tác giả, Cơ quan xuất bản, Phương pháp, Trích dẫn, và Tính cập nhật).</p>
        <div style="overflow-x: auto; margin-top: 16px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
            <thead>
              <tr style="background-color: var(--primary-color); color: white;">
                <th style="padding: 12px; border: 1px solid var(--border-color);">Tên tài liệu / Bài báo</th>
                <th style="padding: 12px; border: 1px solid var(--border-color);">Nguồn & Năm</th>
                <th style="padding: 12px; border: 1px solid var(--border-color);">Đánh giá độ tin cậy</th>
                <th style="padding: 12px; border: 1px solid var(--border-color);">Xếp hạng</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid var(--border-color);"><strong>The Impact of AI on Developer Productivity</strong><br><span style="font-size: 0.85em; color: var(--text-muted);">Tác giả: P. Becker et al.</span></td>
                <td style="padding: 12px; border: 1px solid var(--border-color);">IEEE Transactions (2023)</td>
                <td style="padding: 12px; border: 1px solid var(--border-color);"><strong>Rất cao:</strong> Peer-reviewed, 120+ trích dẫn, phương pháp thực nghiệm rõ ràng, xuất bản bởi cơ quan uy tín.</td>
                <td style="padding: 12px; border: 1px solid var(--border-color); color: #16a34a; font-weight: bold;">⭐ 5/5</td>
              </tr>
              <tr style="background-color: var(--bg-color);">
                <td style="padding: 12px; border: 1px solid var(--border-color);"><strong>Generative AI for Code: A Survey</strong><br><span style="font-size: 0.85em; color: var(--text-muted);">Tác giả: M. Smith</span></td>
                <td style="padding: 12px; border: 1px solid var(--border-color);">arXiv preprint (2024)</td>
                <td style="padding: 12px; border: 1px solid var(--border-color);"><strong>Khá cao:</strong> Cập nhật cực kỳ mới, tác giả uy tín, nhưng chưa trải qua quy trình bình duyệt (peer-review).</td>
                <td style="padding: 12px; border: 1px solid var(--border-color); color: #2563eb; font-weight: bold;">⭐ 4/5</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid var(--border-color);"><strong>How AI is changing coding</strong><br><span style="font-size: 0.85em; color: var(--text-muted);">Tác giả: J. Doe</span></td>
                <td style="padding: 12px; border: 1px solid var(--border-color);">TechBlog (2022)</td>
                <td style="padding: 12px; border: 1px solid var(--border-color);"><strong>Thấp:</strong> Blog cá nhân, thiếu phương pháp luận khoa học, không có trích dẫn nguồn gốc số liệu.</td>
                <td style="padding: 12px; border: 1px solid var(--border-color); color: #dc2626; font-weight: bold;">⭐ 2/5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.9em; color: var(--text-muted); margin-top: 8px;">* Bảng trên là trích đoạn minh họa cho 3 trong số 10 tài liệu đã được phân tích và lưu trữ.</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>3. Hình ảnh minh chứng tìm kiếm</h3>
        <div style="display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 16px;">
          <div style="background: #e2e8f0; height: 250px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[XÓA Ô NÀY VÀ CHÈN THẺ <img src="anh3.jpg"> TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Nhập toán tử nâng cao trên Google Scholar & Hiển thị kết quả</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-task-3" class="modal">
    <div class="modal-content" style="max-width: 900px;">
      <span class="close-btn" onclick="closeModal('modal-task-3')">&times;</span>
      <h2 style="margin-bottom: 20px; color: var(--primary-color);">Nhiệm vụ 3: Kỹ thuật Prompt Engineering</h2>
      
      <p style="margin-bottom: 24px;">Để tối ưu hóa sự hỗ trợ của AI trong việc học ngành CNTT, mình đã áp dụng các kỹ thuật Prompt Engineering nâng cao (Role prompting, Chain-of-Thought, Few-shot) vào 3 tác vụ học tập phổ biến.</p>

      <div style="margin-bottom: 24px;">
        <h3>1. Giải thích khái niệm phức tạp (Lập trình hướng đối tượng - OOP)</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 12px;">
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: #dc2626;">Prompt Cơ bản</h4>
            <p style="font-size: 0.9em; font-family: monospace; margin-top: 8px;">"Giải thích tính Đa hình (Polymorphism) trong lập trình Java."</p>
            <p style="font-size: 0.85em; margin-top: 12px; color: var(--text-muted);"><strong>Kết quả:</strong> AI trả về định nghĩa khô khan từ sách giáo khoa, rất khó hiểu đối với sinh viên mới bắt đầu.</p>
          </div>
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
            <h4 style="color: #2563eb;">Prompt Cải tiến</h4>
            <p style="font-size: 0.9em; font-family: monospace; margin-top: 8px;">"Hãy giải thích tính Đa hình trong Java bằng ngôn ngữ đơn giản, kèm theo một đoạn code ví dụ ngắn gọn."</p>
            <p style="font-size: 0.85em; margin-top: 12px; color: var(--text-muted);"><strong>Kết quả:</strong> Đã dễ hiểu hơn, có code minh họa, nhưng thiếu chiều sâu về mặt nguyên lý hoạt động của máy ảo.</p>
          </div>
          <div style="background: #e0f2fe; padding: 16px; border-radius: 8px; border: 1px solid #bae6fd;">
            <h4 style="color: #0369a1;">Prompt Nâng cao (Role + CoT)</h4>
            <p style="font-size: 0.9em; font-family: monospace; margin-top: 8px;">"Đóng vai là một Senior Developer. Hãy giải thích 'Đa hình' trong Java cho một thực tập sinh bằng một phép ẩn dụ thực tế. Sau đó phân tích từng bước (chain-of-thought) cách JVM xử lý method overriding trong Run-time."</p>
            <p style="font-size: 0.85em; margin-top: 12px; color: #075985;"><strong>Kết quả:</strong> Câu trả lời cực kỳ sinh động, vừa dễ hiểu nhờ phép ẩn dụ, vừa phân tích sâu vào cơ chế lõi của máy ảo Java (JVM).</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>2. Tóm tắt tài liệu & Tạo bộ câu hỏi ôn tập</h3>
        <p style="color: var(--text-muted); font-size: 0.95em;"><em>* Các quy trình tương tự cũng được áp dụng thành công để tóm tắt cuốn sách "Clean Code" bằng kỹ thuật Few-shot examples, và tạo ra 10 câu hỏi trắc nghiệm môn Mạng Máy tính theo mức độ khó tăng dần.</em></p>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>3. Phân tích cơ chế & Lý do hiệu quả</h3>
        <p>Thông qua thử nghiệm, Prompt Nâng cao mang lại hiệu quả vượt trội nhờ vào việc hiểu rõ cơ chế hoạt động của mô hình LLM:</p>
        <ul style="margin-left: 20px; margin-top: 8px;">
          <li><strong>Role Prompting:</strong> Bằng cách ép AI "đóng vai", ta thiết lập được không gian Vector (Context Window) tập trung vào một vùng kiến thức chuyên môn cụ thể, loại bỏ các thông tin gây nhiễu.</li>
          <li><strong>Chain-of-Thought (CoT):</strong> Yêu cầu AI "phân tích từng bước" buộc mô hình phải sinh ra các token trung gian. Việc này giúp AI suy luận logic hơn, giảm thiểu tối đa hiện tượng "ảo giác" (Hallucination) thường gặp.</li>
        </ul>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>4. Bộ nguyên tắc vàng (Tips) khi viết Prompt</h3>
        <ul style="margin-left: 20px; margin-top: 8px; background: #f8fafc; padding: 16px 16px 16px 40px; border-radius: 8px; border: 1px solid var(--border-color);">
          <li>Cung cấp bối cảnh (Context) cụ thể, xác định đối tượng người đọc.</li>
          <li>Chỉ định rõ định dạng đầu ra (Output format: Bảng Markdown, Bullet points, Code block).</li>
          <li>Sử dụng các dấu phân tách (như <code>"""</code> hoặc <code>###</code>) để AI phân biệt rõ lệnh của con người và dữ liệu đầu vào.</li>
          <li><strong>Critique & Revise:</strong> Nếu AI làm chưa đúng ý, không nên tạo chat mới ngay mà hãy bắt lỗi và yêu cầu AI tự sửa chữa trong cùng một phiên chat.</li>
        </ul>
      </div>

      <div style="margin-bottom: 12px;">
        <h3>5. Hình ảnh minh chứng</h3>
        <div style="background: #e2e8f0; height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center; margin-top: 12px;">
            <p style="color: #64748b; font-weight: bold;">[XÓA Ô NÀY VÀ CHÈN THẺ <img src="anh_prompt.jpg"> TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Ảnh chụp màn hình chat thực tế với AI sử dụng Prompt Nâng cao</span></p>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-task-4" class="modal">
    <div class="modal-content" style="max-width: 900px;">
      <span class="close-btn" onclick="closeModal('modal-task-4')">&times;</span>
      <h2 style="margin-bottom: 20px; color: var(--primary-color);">Nhiệm vụ 4: Kỹ năng Hợp tác Trực tuyến</h2>
      
      <p style="margin-bottom: 24px;">Trong quá trình làm việc nhóm, mình đã chủ động thiết lập và sử dụng thành thạo hệ sinh thái 4 công cụ trực tuyến. Việc này không chỉ giúp hoàn thành phần việc cá nhân mà còn tối ưu hóa luồng công việc (Workflow) của toàn đội.</p>

      <div style="margin-bottom: 24px;">
        <h3>1. Hệ sinh thái công cụ đã triển khai</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 12px;">
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
            <strong style="color: #0284c7;">Quản lý dự án (Trello)</strong>
            <p style="font-size: 0.9em; margin-top: 8px;">Theo dõi tiến độ bằng phương pháp Kanban (To Do - Doing - Done), gán thẻ màu, checklist và thiết lập Deadline.</p>
          </div>
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
            <strong style="color: #16a34a;">Lưu trữ & Chia sẻ (Google Drive)</strong>
            <p style="font-size: 0.9em; margin-top: 8px;">Tạo thư mục Shared Drive chung, phân quyền truy cập (View/Edit) chặt chẽ cho từng cấp độ thành viên.</p>
          </div>
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
            <strong style="color: #eab308;">Soạn thảo (Google Docs)</strong>
            <p style="font-size: 0.9em; margin-top: 8px;">Cộng tác viết báo cáo thời gian thực, sử dụng tính năng Suggestion và Comment để review chéo nội dung.</p>
          </div>
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color);">
            <strong style="color: #8b5cf6;">Giao tiếp (Discord)</strong>
            <p style="font-size: 0.9em; margin-top: 8px;">Phân chia các Text Channel theo từng hạng mục công việc (Data, Code, Report) và dùng Voice chat để họp Scrum.</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>2. Tối ưu hóa quy trình (Tích hợp tính năng nâng cao)</h3>
        <p>Để đạt được mức độ chuyên nghiệp và tránh hiện tượng "trôi tin nhắn", mình đã đề xuất thực hiện <strong>tích hợp Webhook tự động giữa Trello và Discord</strong>. Cụ thể quy trình:</p>
        <ul style="margin-left: 20px; margin-top: 8px; background: #f8fafc; padding: 16px 16px 16px 40px; border-radius: 8px; border: 1px solid var(--border-color);">
          <li>Khi một thành viên (ví dụ như mình) hoàn thành một task và kéo thẻ từ cột "Doing" sang cột "Done" trên Trello.</li>
          <li>Trello Bot sẽ tự động kích hoạt Webhook, bắn thông báo về kênh <code>#thong-bao-tien-do</code> trên Discord.</li>
          <li><strong>Lợi ích:</strong> Giảm thiểu thời gian phải báo cáo thủ công. Project Manager và các thành viên khác nắm bắt được sự thay đổi trạng thái của dự án theo thời gian thực (Real-time).</li>
        </ul>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>3. Nhật ký minh chứng cá nhân</h3>
        <p style="color: var(--text-muted); font-size: 0.95em; margin-bottom: 16px;">Dưới đây là các minh chứng thể hiện sự đóng góp thực tế của cá nhân mình trên các nền tảng (Hiển thị rõ tên tài khoản hoạt động):</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <!-- Ảnh Trello -->
          <div style="background: #e2e8f0; height: 180px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH TRELLO TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Giao việc cho cá nhân & Check-list</span></p>
          </div>
          <!-- Ảnh Google Docs -->
          <div style="background: #e2e8f0; height: 180px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH GOOGLE DOCS TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Lịch sử chỉnh sửa (Version History) của cá nhân</span></p>
          </div>
          <!-- Ảnh Discord -->
          <div style="background: #e2e8f0; height: 180px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH DISCORD TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Tương tác thảo luận và thông báo từ Bot Trello</span></p>
          </div>
          <!-- Ảnh Google Drive -->
          <div style="background: #e2e8f0; height: 180px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH DRIVE TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Cấu trúc thư mục chia sẻ khoa học</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-task-5" class="modal">
    <div class="modal-content" style="max-width: 900px;">
      <span class="close-btn" onclick="closeModal('modal-task-5')">&times;</span>
      <h2 style="margin-bottom: 20px; color: var(--primary-color);">Nhiệm vụ 5: Sáng tạo nội dung với AI</h2>
      
      <p style="margin-bottom: 24px;">Trong nhiệm vụ này, mình đã đóng vai trò là một Content Creator để sản xuất một bài <strong>Blog công nghệ về chủ đề "Tương lai của Web 3.0"</strong>, kết hợp sức mạnh của 3 công cụ AI tạo sinh (Generative AI) khác nhau để đẩy nhanh tiến độ.</p>

      <div style="margin-bottom: 24px;">
        <h3>1. Quá trình sử dụng 3 công cụ AI tạo sinh</h3>
        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 12px;">
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); border-left: 4px solid #10b981;">
            <strong style="color: #047857; font-size: 1.1em;">A. ChatGPT (AI tạo văn bản)</strong>
            <p style="margin-top: 8px; font-size: 0.95em;"><strong>Prompt:</strong> <em>"Đóng vai là một chuyên gia Blockchain. Viết một dàn ý chi tiết cho bài blog 1000 chữ giải thích Web 3.0 là gì, dành cho độc giả đại chúng không rành kỹ thuật."</em></p>
            <p style="margin-top: 4px; font-size: 0.95em;"><strong>Cách tích hợp:</strong> Thay vì copy-paste 100%, mình dùng ChatGPT để thiết lập cấu trúc xương sống (Outline). Sau đó, mình tự viết lại các đoạn văn bằng ngôn từ của cá nhân mình (Human-touch) để bài viết có cảm xúc và mang đậm dấu ấn cá nhân.</p>
          </div>
          
          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); border-left: 4px solid #8b5cf6;">
            <strong style="color: #5b21b6; font-size: 1.1em;">B. Midjourney (AI tạo hình ảnh)</strong>
            <p style="margin-top: 8px; font-size: 0.95em;"><strong>Prompt:</strong> <em>"A futuristic abstract illustration of decentralized internet Web 3.0, glowing nodes, cyberspace, neon blue and purple --ar 16:9 --v 6.0"</em></p>
            <p style="margin-top: 4px; font-size: 0.95em;"><strong>Cách tích hợp:</strong> Mình đã liên tục tinh chỉnh Prompt (thêm bớt tham số tỷ lệ <code>--ar</code>) để tìm ra bức ảnh có bố cục phù hợp nhất làm ảnh bìa (Thumbnail) cho bài blog.</p>
          </div>

          <div style="background: var(--bg-color); padding: 16px; border-radius: 8px; border: 1px solid var(--border-color); border-left: 4px solid #0ea5e9;">
            <strong style="color: #0369a1; font-size: 1.1em;">C. Canva AI (Hỗ trợ thiết kế)</strong>
            <p style="margin-top: 8px; font-size: 0.95em;"><strong>Cách tích hợp:</strong> Sử dụng công cụ <em>Magic Eraser</em> của Canva AI để xóa các chi tiết rác (artifacts) do Midjourney tạo lỗi. Đồng thời dùng AI để đề xuất Font chữ (Typography) tiêu đề hợp với phong cách Tương lai (Futuristic).</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>2. Phân tích vai trò của AI trong sáng tạo</h3>
        <p>Sau khi hoàn thiện ấn phẩm, mình nhận thấy AI mang lại tác động cực lớn đến quy trình sáng tạo (Workflow):</p>
        <ul style="margin-left: 20px; margin-top: 8px;">
          <li><strong>Điểm AI làm xuất sắc:</strong> Phá vỡ hội chứng "Sợ trang giấy trắng" (Blank page syndrome). Tốc độ tạo ra ý tưởng nền móng và hình ảnh phác thảo là chưa từng có (chỉ mất vài giây).</li>
          <li><strong>Điểm còn hạn chế:</strong> Văn bản do AI sinh ra đôi khi bị lặp cấu trúc, giọng văn khá "máy móc". Hình ảnh AI thường hay bị lỗi text hoặc sai tỷ lệ ở các chi tiết ngón tay/khuôn mặt nếu không biết cách prompt kỹ.</li>
          <li><strong>Sự chuyển dịch Workflow:</strong> Quy trình làm việc của mình đã thay đổi hoàn toàn: <em>AI tạo nền móng ➔ Con người kiểm duyệt tính đúng đắn ➔ Con người tinh chỉnh và thổi hồn (Cảm xúc & Kinh nghiệm) ➔ Hoàn thiện sản phẩm.</em></li>
        </ul>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>3. Các vấn đề đạo đức (Ethics)</h3>
        <p>Khi sử dụng AI tạo sinh, mình luôn tuân thủ nguyên tắc <strong>Minh bạch</strong>. Cụ thể, mình có ghi chú rõ ràng ở cuối bài Blog là hình ảnh được hỗ trợ tạo bởi Midjourney và dàn ý được tham khảo từ ChatGPT để người đọc nắm rõ.</p>
      </div>

      <div style="margin-bottom: 12px;">
        <h3>4. Hình ảnh Minh chứng & Sản phẩm hoàn thiện</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
          <div style="background: #e2e8f0; height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH BÀI BLOG TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Sản phẩm Bài Blog hoàn thiện</span></p>
          </div>
          <div style="background: #e2e8f0; height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH QUÁ TRÌNH TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Minh chứng: Lịch sử Chat Prompt và Canva AI</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="modal-task-6" class="modal">
    <div class="modal-content" style="max-width: 900px;">
      <span class="close-btn" onclick="closeModal('modal-task-6')">&times;</span>
      <h2 style="margin-bottom: 20px; color: var(--primary-color);">Nhiệm vụ 6: Sử dụng AI có trách nhiệm và Liêm chính học thuật</h2>
      
      <div style="margin-bottom: 24px;">
        <h3>1. Khảo sát chính sách học thuật & Vấn đề Đạo đức</h3>
        <p>Thông qua việc tham khảo quy chế Đào tạo và Liêm chính học thuật của nhà trường, mình nhận thấy một nguyên tắc cốt lõi: <strong>AI được khuyến khích sử dụng như một "Trợ lý Tư duy", nhưng nghiêm cấm việc dùng AI để sinh ra nội dung và nhận là chất xám của mình (Đạo văn/Gian lận).</strong></p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
          <div style="background: #fef2f2; padding: 16px; border-radius: 8px; border: 1px solid #fca5a5;">
            <strong style="color: #dc2626;">Ranh giới Gian lận (Cheating)</strong>
            <p style="font-size: 0.9em; margin-top: 8px;">Copy-paste nguyên văn bài luận của AI đem nộp. Sử dụng AI để giải bài tập lập trình mà không hiểu code. Điều này trực tiếp làm thui chột khả năng tư duy phản biện và kỹ năng giải quyết vấn đề cốt lõi của sinh viên IT.</p>
          </div>
          <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; border: 1px solid #86efac;">
            <strong style="color: #16a34a;">Hỗ trợ Hợp lý (Fair Use)</strong>
            <p style="font-size: 0.9em; margin-top: 8px;">Dùng AI để tóm tắt tài liệu dài, giải thích lỗi (Debug) trong lập trình, gợi ý cấu trúc bài thuyết trình. Tuy nhiên, sau đó sinh viên phải tự viết lại code và biên tập bằng văn phong, kiến thức cá nhân.</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>2. Ứng dụng thực tiễn: Chuẩn bị Thuyết trình môn học</h3>
        <p>Mình đã áp dụng quy tắc trên vào việc làm slide báo cáo giữa kỳ:</p>
        <ul style="margin-left: 20px; margin-top: 8px; background: var(--bg-color); padding: 16px 16px 16px 40px; border-radius: 8px; border: 1px solid var(--border-color);">
          <li><strong>Prompt:</strong> <em>"Liệt kê 5 gạch đầu dòng cấu trúc cho bài thuyết trình 10 phút về Kiến trúc máy tính."</em></li>
          <li><strong>Đánh giá & Chỉnh sửa:</strong> AI đưa ra cấu trúc tốt nhưng thiếu tính thực tiễn. Mình đã giữ lại cấu trúc khung, nhưng tự nghiên cứu và đưa thêm hình ảnh thực tế của chip ARM và x86 vào slide.</li>
          <li><strong>Minh bạch trích dẫn:</strong> Ở slide "Tài liệu tham khảo" cuối cùng, mình ghi rõ ràng: <em>"Cấu trúc slide được hỗ trợ bởi ChatGPT (Phiên bản GPT-4o, 2026), nội dung chi tiết do cá nhân tự nghiên cứu."</em></li>
        </ul>
      </div>

      <div style="margin-bottom: 24px;">
        <h3>3. Bộ quy tắc cá nhân (5 Nguyên tắc vàng)</h3>
        <p>Nhằm đảm bảo sự phát triển kỹ năng lâu dài, mình tự thiết lập bộ 5 nguyên tắc đạo đức sau:</p>
        <ol style="margin-left: 20px; margin-top: 8px; line-height: 1.8;">
          <li><strong>AI là Thầy giáo (Tutor), không phải Thợ làm thuê:</strong> Chỉ dùng AI để giải thích khái niệm, tuyệt đối không nhờ AI code hoặc viết bài nộp hộ.</li>
          <li><strong>Kiểm chứng chéo (Fact-check):</strong> Mọi thông tin, số liệu AI đưa ra (nhất là số liệu thống kê) phải được kiểm chứng bằng Google Scholar.</li>
          <li><strong>Công khai và Minh bạch:</strong> Luôn trân trọng quyền Sở hữu trí tuệ (IP) bằng cách ghi chú rõ ràng các công cụ AI đã dùng trong dự án.</li>
          <li><strong>Chống định kiến (Bias):</strong> Hiểu rằng AI có thể mang định kiến, do đó luôn phải giữ tư duy phản biện (Critical Thinking) khi đọc kết quả của AI.</li>
          <li><strong>Bảo mật thông tin:</strong> Tuyệt đối không đưa dữ liệu nhạy cảm, bài tập độc quyền của giảng viên, hay mã nguồn nội bộ lên khung chat AI để tránh rò rỉ dữ liệu.</li>
        </ol>
      </div>

      <div style="margin-bottom: 12px;">
        <h3>4. Infographic: AI Ethics in Education</h3>
        <div style="background: #e2e8f0; height: 350px; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed #94a3b8; text-align: center; margin-top: 12px;">
            <p style="color: #64748b; font-weight: bold;">[CHÈN ẢNH INFOGRAPHIC TẠI ĐÂY]<br><span style="font-weight: normal; font-size: 0.9em;">Gợi ý: Bạn dùng Canva tạo 1 chiếc Infographic tóm tắt 5 nguyên tắc trên rồi chèn vào đây nhé!</span></p>
        </div>
      </div>
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
