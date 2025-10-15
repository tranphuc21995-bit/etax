/**
 * Data Loader Script
 * Tự động load dữ liệu từ data.json và cập nhật giao diện
 */

// Hàm load dữ liệu từ JSON
async function loadData() {
    try {
        const response = await fetch('data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Cập nhật các phần tử HTML
        updateElement('username', data.username);
        updateElement('tax_id', data.tax_id);
        updateElement('amount', data.amount);
        updateElement('date', data.date);
        updateElement('status', data.status);
        
        console.log('✅ Dữ liệu đã được load thành công:', data);
    } catch (error) {
        console.error('❌ Lỗi khi load dữ liệu:', error);
        // Fallback: hiển thị dữ liệu mặc định
        showDefaultData();
    }
}

// Hàm cập nhật phần tử HTML
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
        console.log(`📝 Đã cập nhật #${id}: ${value}`);
    } else {
        console.warn(`⚠️ Không tìm thấy element với id: ${id}`);
    }
}

// Hàm hiển thị dữ liệu mặc định khi có lỗi
function showDefaultData() {
    const defaultData = {
        username: "Nguyen Van A",
        tax_id: "123456789",
        amount: "5,000,000",
        date: "20/10/2025",
        status: "Đã nộp"
    };
    
    Object.keys(defaultData).forEach(key => {
        updateElement(key, defaultData[key]);
    });
}

// Hàm reload dữ liệu (có thể gọi từ console)
window.reloadData = loadData;

// Tự động load dữ liệu khi DOM đã sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadData);
} else {
    loadData();
}

