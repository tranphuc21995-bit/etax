/**
 * Template Data Service
 * Quản lý dữ liệu template cho user và nghĩa vụ thuế
 */

class TemplateDataService {
  constructor() {
    this.storageKey = 'etax_template_data';
    this.initDefaultData();
  }

  /**
   * Khởi tạo dữ liệu mặc định nếu chưa có
   */
  initDefaultData() {
    if (!this.loadTemplateData()) {
      const defaultData = {
        users: {
          "001095026798": {
            fullName: "",
            mst: "001095026798"
          },
          "022097004736": {
            fullName: "",
            mst: "022097004736"
          },
          "8198700370": {
            fullName: "",
            mst: "8198700370"
          },
          "123456789": {
            fullName: "",
            mst: "123456789"
          }
        },
        taxObligations: {
          "obligation_1": {
            userId: "001095026798",
            userName: "",
            amounts: {
              small: "",
              medium: "",
              large: ""
            },
            paymentId: "",
            taxOffice: "",
            region: "",
            decisionDate: ""
          }
        }
      };
      this.saveTemplateData(defaultData);
    }
  }

  /**
   * Load dữ liệu template từ localStorage
   */
  loadTemplateData() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Lỗi khi load template data:', error);
      return null;
    }
  }

  /**
   * Lưu dữ liệu template vào localStorage
   */
  saveTemplateData(data) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data, null, 2));
      return true;
    } catch (error) {
      console.error('Lỗi khi lưu template data:', error);
      return false;
    }
  }

  /**
   * Lấy dữ liệu của một user cụ thể
   */
  getUserTemplateData(userId) {
    const data = this.loadTemplateData();
    if (!data || !data.users[userId]) {
      return null;
    }

    const userData = data.users[userId];
    const userObligations = Object.values(data.taxObligations || {})
      .filter(obligation => obligation.userId === userId);

    return {
      user: userData,
      obligations: userObligations
    };
  }

  /**
   * Cập nhật thông tin user
   */
  updateUserTemplateData(userId, userData) {
    const data = this.loadTemplateData();
    if (!data) return false;

    if (!data.users[userId]) {
      data.users[userId] = { mst: userId };
    }

    data.users[userId] = { ...data.users[userId], ...userData };
    return this.saveTemplateData(data);
  }

  /**
   * Thêm nghĩa vụ thuế mới
   */
  addNewObligation(userId, obligationData) {
    const data = this.loadTemplateData();
    if (!data) return false;

    const obligationId = `obligation_${Date.now()}`;
    data.taxObligations[obligationId] = {
      userId: userId,
      userName: obligationData.userName || "",
      amounts: {
        small: obligationData.amounts?.small || "",
        medium: obligationData.amounts?.medium || "",
        large: obligationData.amounts?.large || ""
      },
      paymentId: obligationData.paymentId || "",
      taxOffice: obligationData.taxOffice || "",
      region: obligationData.region || "",
      decisionDate: obligationData.decisionDate || ""
    };

    return this.saveTemplateData(data);
  }

  /**
   * Cập nhật nghĩa vụ thuế
   */
  updateObligation(obligationId, obligationData) {
    const data = this.loadTemplateData();
    if (!data || !data.taxObligations[obligationId]) return false;

    data.taxObligations[obligationId] = {
      ...data.taxObligations[obligationId],
      ...obligationData
    };

    return this.saveTemplateData(data);
  }

  /**
   * Xóa nghĩa vụ thuế
   */
  deleteObligation(obligationId) {
    const data = this.loadTemplateData();
    if (!data || !data.taxObligations[obligationId]) return false;

    delete data.taxObligations[obligationId];
    return this.saveTemplateData(data);
  }

  /**
   * Lấy danh sách tất cả users
   */
  getAllUsers() {
    const data = this.loadTemplateData();
    return data ? data.users : {};
  }

  /**
   * Lấy danh sách tất cả nghĩa vụ thuế
   */
  getAllObligations() {
    const data = this.loadTemplateData();
    return data ? data.taxObligations : {};
  }

  /**
   * Export dữ liệu để anh có thể copy vào file JSON thật
   */
  exportData() {
    const data = this.loadTemplateData();
    return JSON.stringify(data, null, 2);
  }

  /**
   * Import dữ liệu từ JSON string
   */
  importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      return this.saveTemplateData(data);
    } catch (error) {
      console.error('Lỗi khi import data:', error);
      return false;
    }
  }
}

// Tạo instance global
window.templateDataService = new TemplateDataService();

// Export cho module system nếu có
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TemplateDataService;
}
