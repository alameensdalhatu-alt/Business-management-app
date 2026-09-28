// Business Management App
// Main application logic

let language = "en";

// Load saved business information
function loadBusiness() {
  const businessName = localStorage.getItem("businessName");

  if (businessName) {
    const input = document.getElementById("businessName");

    if (input) {
      input.value = businessName;
    }
  }
}

// Save business name
function saveBusinessName() {
  const input = document.getElementById("businessName");

  if (!input) return;

  const name = input.value.trim();

  if (!name) {
    alert(
      language === "en"
        ? "Please enter your business name."
        : "Da fatan ka rubuta sunan business ɗinka."
    );
    return;
  }

  localStorage.setItem("businessName", name);

  alert(
    language === "en"
      ? "Business name saved successfully."
      : "An adana sunan business ɗinka cikin nasara."
  );
}

// Open a business module
function openModule(module) {
  alert(
    language === "en"
      ? module + " module is ready to be developed."
      : "Za mu gina sashen " + module + " a mataki na gaba."
  );
}

// Switch between English and Hausa
function toggleLanguage() {
  language = language === "en" ? "ha" : "en";

  updateLanguage();
}

// Update visible text
function updateLanguage() {
  const text = {
    en: {
      appTitle: "Business Management App",
      subtitle: "Simple management for MSMEs",
      businessTitle: "Your Business",
      businessPlaceholder: "Enter your business name",
      dashboardTitle: "Dashboard",
      salesLabel: "Sales",
      expenseLabel: "Expenses",
      receivableLabel: "Receivables",
      payableLabel: "Payables",
      modulesTitle: "Business Modules",
      salesModule: "Sales",
      expensesModule: "Expenses",
      inventoryModule: "Inventory",
      customersModule: "Customers",
      suppliersModule: "Suppliers",
      invoicesModule: "Invoices",
      meetingsModule: "Meetings",
      reportsModule: "Reports"
    },

    ha: {
      appTitle: "Manhajar Gudanar da Kasuwanci",
      subtitle: "Sauƙaƙƙen tsarin gudanar da MSMEs",
      businessTitle: "Bayanin Business",
      businessPlaceholder: "Rubuta sunan business ɗinka",
      dashboardTitle: "Dashboard",
      salesLabel: "Sayarwa",
      expenseLabel: "Kuɗin kashewa",
      receivableLabel: "Kuɗin da ake bin ka",
      payableLabel: "Kuɗin da kake bi",
      modulesTitle: "Sassan Business",
      salesModule: "Sayarwa",
      expensesModule: "Kuɗin kashewa",
      inventoryModule: "Kayayyaki",
      customersModule: "Kwastomomi",
      suppliersModule: "Masu kaya",
      invoicesModule: "Invoice",
      meetingsModule: "Taro",
      reportsModule: "Rahotanni"
    }
  };

  const t = text[language];

  Object.keys(t).forEach(id => {
    const element = document.getElementById(id);

    if (element) {
      if (id === "businessPlaceholder") {
        element.placeholder = t[id];
      } else {
        element.textContent = t[id];
      }
    }
  });
}

// Start application
document.addEventListener("DOMContentLoaded", () => {
  loadBusiness();
  updateLanguage();
});
