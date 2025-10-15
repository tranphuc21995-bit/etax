# 📋 TEMPLATE CHO KHÁCH HÀNG MỚI

## 🎯 Mục đích
File template này chứa các trường **ĐỂ TRỐNG** để anh có thể điền thông tin khi có khách hàng mới.

## 📝 Cách sử dụng

### Bước 1: Copy template
```json
{
  "users": {
    "KHACH_HANG_MOI": {
      "fullName": "",
      "mst": ""
    }
  },
  "taxObligations": {
    "obligation_template": {
      "userId": "",
      "userName": "",
      "amounts": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "paymentId": "",
      "taxOffice": "",
      "region": "",
      "decisionDate": ""
    }
  }
}
```

### Bước 2: Điền thông tin khách hàng

**👤 Thông tin User:**
- `"KHACH_HANG_MOI"` → Thay bằng MST thật của khách hàng
- `"fullName": ""` → Điền họ tên khách hàng (VD: "NGUYỄN VĂN A")
- `"mst": ""` → Điền MST khách hàng (VD: "0123456789")

**💰 Thông tin Nghĩa vụ thuế:**
- `"userId": ""` → Điền MST khách hàng
- `"userName": ""` → Điền họ tên khách hàng
- `"amounts.small": ""` → Số tiền nhỏ (VD: "50.000")
- `"amounts.medium": ""` → Số tiền trung (VD: "5,000,000")
- `"amounts.large": ""` → Số tiền lớn (VD: "2,500,000")
- `"paymentId": ""` → ID khoản phải nộp (VD: "04057866369400001")
- `"taxOffice": ""` → Tên cơ quan thu (VD: "Đội Thuế thành phố Hạ Long")
- `"region": ""` → Địa bàn (VD: "Thành phố Hạ Long (193HH)")
- `"decisionDate": ""` → Ngày quyết định (VD: "07/01/2025")

### Bước 3: Import vào hệ thống
1. Truy cập trang admin: `/src/admin-essential/admin-template-editor.html`
2. Bấm nút "📥 Import JSON"
3. Paste JSON đã điền vào textarea
4. Bấm "✅ Import"

## 📋 Ví dụ hoàn chỉnh

```json
{
  "users": {
    "0123456789": {
      "fullName": "NGUYỄN VĂN A",
      "mst": "0123456789"
    }
  },
  "taxObligations": {
    "obligation_1": {
      "userId": "0123456789",
      "userName": "NGUYỄN VĂN A",
      "amounts": {
        "small": "50.000",
        "medium": "5,000,000",
        "large": "2,500,000"
      },
      "paymentId": "04057866369400001",
      "taxOffice": "Đội Thuế thành phố Hạ Long",
      "region": "Thành phố Hạ Long (193HH)",
      "decisionDate": "07/01/2025"
    }
  }
}
```

## 🔄 Quy trình làm việc

1. **Khách hàng mới** → Copy template rỗng
2. **Điền thông tin** → Thay các trường `""` bằng thông tin thật
3. **Import vào hệ thống** → Sử dụng trang admin
4. **Kiểm tra kết quả** → Xem các trang hiển thị đúng chưa

## 📁 File liên quan

- `data/template-khach-hang-moi.json` - Template rỗng
- `src/admin-essential/admin-template-editor.html` - Trang admin
- `src/services/template-data-service.js` - Service xử lý
