// Script để thêm thông báo mẫu vào Firebase Realtime Database
// Chạy script này trong browser console hoặc Node.js

const firebaseConfig = {
    apiKey: "AIzaSyD_rJgBFgBulheVenQUE2KXr4PBpSpTCxw",
    authDomain: "etax-7fbf8.firebaseapp.com",
    databaseURL: "https://etax-7fbf8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "etax-7fbf8",
    storageBucket: "etax-7fbf8.appspot.com",
    messagingSenderId: "1030026724634",
    appId: "1:1030026724634:web:d76f5f9dad43bad6fd58a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Thông báo mẫu
const sampleNotifications = {
    "notif_001": {
        title: "Giao dịch nộp thuế",
        content: "Người nộp thuế đã nộp thuế thành công. Mã tham chiếu: 11020250044818128. Số tiền nộp: 2,500,000 VNĐ. Thời gian: 11/10/2025 12:37:23",
        type: "personal",
        targetUser: "0123456789", // MST của user
        publishDate: new Date("2025-10-11T12:37:23").getTime(),
        category: "payment"
    },
    "notif_002": {
        title: "Thông báo kế hoạch tạm dừng hệ thống",
        content: "Cục Thuế thông báo về việc tạm dừng các hệ thống thuế điện tử từ 18h00 ngày 27/6/2025 đến 06h00 ngày 28/6/2025 để bảo trì hệ thống.",
        type: "general",
        publishDate: new Date("2025-06-27T15:05:59").getTime(),
        category: "system"
    },
    "notif_003": {
        title: "Thông báo kế hoạch tạm dừng hệ thống",
        content: "Cục Thuế thông báo về việc tạm dừng Dịch vụ Thuế điện tử trên thiết bị di động (eTax Mobile) từ 22h00 ngày 13/6/2025 đến 06h00 ngày 14/6/2025.",
        type: "general",
        publishDate: new Date("2025-06-13T16:34:34").getTime(),
        category: "system"
    },
    "notif_004": {
        title: "Thông báo kế hoạch tạm dừng hệ thống",
        content: "Cục Thuế thông báo về việc tạm dừng Dịch vụ Thuế điện tử trên thiết bị di động (eTax Mobile) từ 22h00 ngày 13/6/2025 đến 06h00 ngày 14/6/2025.",
        type: "general",
        publishDate: new Date("2025-06-13T16:24:25").getTime(),
        category: "system"
    },
    "notif_005": {
        title: "V/v: Tài khoản giao dịch thuế điện tử",
        content: "Thông báo về việc cập nhật thông tin tài khoản giao dịch thuế điện tử. Vui lòng kiểm tra và cập nhật thông tin tài khoản của bạn.",
        type: "personal",
        targetUser: "0123456789",
        publishDate: new Date("2025-06-04T13:27:39").getTime(),
        category: "account"
    },
    "notif_006": {
        title: "Thông báo nghĩa vụ thuế mới",
        content: "Có nghĩa vụ thuế mới phát sinh. Số tiền: 1,200,000 VNĐ. Hạn nộp: 25/10/2025. Vui lòng thực hiện nghĩa vụ thuế đúng hạn.",
        type: "personal",
        targetUser: "0123456789",
        publishDate: new Date("2025-10-15T09:15:30").getTime(),
        category: "tax_obligation"
    },
    "notif_007": {
        title: "Cập nhật phần mềm eTax Mobile",
        content: "Phiên bản mới của ứng dụng eTax Mobile đã có sẵn. Vui lòng cập nhật để có trải nghiệm tốt nhất và các tính năng mới.",
        type: "general",
        publishDate: new Date("2025-10-12T14:20:15").getTime(),
        category: "update"
    }
};

// Hàm thêm thông báo
async function addSampleNotifications() {
    try {
        console.log("Đang thêm thông báo mẫu...");
        
        // Thêm từng thông báo
        for (const [key, notification] of Object.entries(sampleNotifications)) {
            await db.ref(`notifications/${key}`).set(notification);
            console.log(`Đã thêm thông báo: ${notification.title}`);
        }
        
        console.log("✅ Hoàn thành! Đã thêm tất cả thông báo mẫu.");
        
    } catch (error) {
        console.error("❌ Lỗi khi thêm thông báo:", error);
    }
}

// Chạy hàm
addSampleNotifications();
