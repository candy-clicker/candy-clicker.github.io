/**
 * ==========================================================================
 * Game Player & Controls Logic (Candy Clicker Platform)
 * ==========================================================================
 */

// 1. Chơi game: Chèn iframe trực tiếp vào .game-frame một cách ngắn gọn nhất
function playGame() {
    const frame = document.querySelector('.game-frame');
    if (!frame) return;

    // Lấy link game từ data-game của .game-frame nếu có
    const gameUrl = frame.dataset.game;
    if (gameUrl) {
        frame.innerHTML = `<iframe src="${gameUrl}" style="width:100%;height:100%;border:none;position:absolute;top:0;left:0;" allowfullscreen scrolling="no" allow="autoplay; fullscreen"></iframe>`;
    }
}

// 2. Chế độ phóng to / thu nhỏ toàn màn hình (Fullscreen)
function toggleFullscreen() {
    const frame = document.querySelector('.game-frame');
    if (!frame) return;

    if (!document.fullscreenElement) {
        if (frame.requestFullscreen) {
            frame.requestFullscreen();
        } else if (frame.webkitRequestFullscreen) {
            frame.webkitRequestFullscreen();
        } else if (frame.msRequestFullscreen) {
            frame.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// 3. Nút Thích (Like) & Lưu trạng thái vào localStorage
function toggleLike(btn) {
    btn.classList.toggle('active');
    const isLiked = btn.classList.contains('active');
    localStorage.setItem('game_liked_' + getGameStorageKey(), isLiked ? 'true' : 'false');
}

// 4. Nút Yêu thích (Heart / Favorite) & Lưu trạng thái vào localStorage
function toggleHeart(btn) {
    btn.classList.toggle('active');
    const isFavorited = btn.classList.contains('active');
    localStorage.setItem('game_favorited_' + getGameStorageKey(), isFavorited ? 'true' : 'false');
}

// Hàm phụ: Lấy khóa lưu trữ riêng cho từng game dựa theo URL
function getGameStorageKey() {
    return window.location.pathname.replace(/[^a-zA-Z0-9]/g, '_') || 'candy_clicker';
}

// 5. Tự động khởi tạo khi trang web tải xong
document.addEventListener('DOMContentLoaded', function () {
    // Tự động gán sự kiện click cho nút Play
    const playBtn = document.querySelector('.play-button');
    if (playBtn) {
        playBtn.addEventListener('click', playGame);
    }

    // Khôi phục trạng thái Like & Favorite đã lưu trước đó
    const key = getGameStorageKey();
    if (localStorage.getItem('game_liked_' + key) === 'true') {
        const likeBtn = document.getElementById('like-btn');
        if (likeBtn) likeBtn.classList.add('active');
    }
    if (localStorage.getItem('game_favorited_' + key) === 'true') {
        const heartBtn = document.getElementById('heart-btn');
        if (heartBtn) heartBtn.classList.add('active');
    }
});
