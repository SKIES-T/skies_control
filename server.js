let DEVICE_IP = localStorage.getItem("device_ip") || "http://mock-device";

if (!DEVICE_IP) {
  alert("ยังไม่ได้เลือกอุปกรณ์");
  window.location.href = "connect.html";
}

function control(device, state) {
  console.log(`Mock: สั่ง ${device} เป็น ${state}`);
  
  // จำลองดีเลย์ 500ms ก่อนแสดงสถานะ
  setTimeout(() => {
    document.getElementById(`status-${device}`).innerText = state === 'on' ? 'ON' : 'OFF';
    console.log(`Mock: อุปกรณ์ ${device} ถูกตั้งค่าเป็น ${state}`);
  }, 500);
}

function resetIP() {
  localStorage.removeItem("device_ip");
  window.location.href = "connect.html";
}
