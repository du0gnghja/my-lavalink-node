const https = require('https');

/**
 * Hàm gửi request ping tới Lavalink Render để chống ngủ đông (Spin Down)
 * @param {string} renderUrl - URL đầy đủ của dịch vụ Render (VD: https://my-lavalink.onrender.com)
 * @param {number} intervalMinutes - Khoảng thời gian giữa các lần ping (Mặc định: 5 phút)
 */
function startLavalinkKeepAlive(renderUrl, intervalMinutes = 5) {
  if (!renderUrl) {
    console.error('[ANTI-SLEEP] Lỗi: Chưa cung cấp RENDER_URL!');
    return;
  }

  const intervalMs = intervalMinutes * 60 * 1000;

  console.log(`[ANTI-SLEEP] Đã bật chế độ Anti-Sleep cho Render (${intervalMinutes} phút/lần)`);

  setInterval(() => {
    https.get(renderUrl, (res) => {
      console.log(`[ANTI-SLEEP] Ping Render (${renderUrl}) - HTTP Status: ${res.statusCode}`);
    }).on('error', (err) => {
      console.error(`[ANTI-SLEEP] Lỗi khi ping Render: ${err.message}`);
    });
  }, intervalMs);
}

// Gọi hàm khởi chạy (Thay URL bằng link Render của bạn)
const RENDER_URL = process.env.RENDER_LAVALINK_URL || 'https://my-lavalink-node.onrender.com';
startLavalinkKeepAlive(RENDER_URL, 5);
