document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const sidebarCollapseBtn = document.getElementById("sidebarCollapseBtn");
  const sidebarCollapseIcon = document.getElementById("sidebarCollapseIcon");

  if (sidebarToggle && sidebar && mainContent) {
    sidebarToggle.addEventListener("click", function () {
      // Toggle sidebar visibility
      sidebar.classList.toggle("-translate-x-full");

      // On mobile, we'll also add/remove a backdrop
      if (window.innerWidth < 1024) {
        // lg breakpoint
        if (!sidebar.classList.contains("-translate-x-full")) {
          // Create backdrop
          const backdrop = document.createElement("div");
          backdrop.id = "sidebarBackdrop";
          backdrop.className =
            "fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden";
          backdrop.addEventListener("click", function () {
            sidebar.classList.add("-translate-x-full");
            backdrop.remove();
          });
          document.body.appendChild(backdrop);
        } else {
          // Remove backdrop
          const backdrop = document.getElementById("sidebarBackdrop");
          if (backdrop) {
            backdrop.remove();
          }
        }
      }
    });
  }

  // Close sidebar on window resize if mobile
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      // lg breakpoint
      // Remove backdrop if it exists
      const backdrop = document.getElementById("sidebarBackdrop");
      if (backdrop) {
        backdrop.remove();
      }
    }
  });

  // Profile Dropdown Menu
  const profileMenuButton = document.getElementById("profileMenuButton");
  const profileDropdown = document.getElementById("profileDropdown");

  if (profileMenuButton && profileDropdown) {
    // Toggle dropdown on button click
    profileMenuButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Profile button clicked!"); // Debug log

      // Close notification dropdown if open
      const notificationDropdown = document.getElementById(
        "notificationDropdown"
      );
      if (
        notificationDropdown &&
        !notificationDropdown.classList.contains("hidden")
      ) {
        notificationDropdown.classList.add("hidden");
      }

      // Close filter dropdown if open
      const filterDropdown = document.getElementById("filterDropdown");
      if (filterDropdown && !filterDropdown.classList.contains("hidden")) {
        filterDropdown.classList.add("hidden");
      }

      if (profileDropdown.classList.contains("hidden")) {
        // Position the dropdown relative to the button
        const buttonRect = profileMenuButton.getBoundingClientRect();
        profileDropdown.style.top = buttonRect.bottom + 8 + "px";
        profileDropdown.style.right =
          window.innerWidth - buttonRect.right + "px";
        profileDropdown.classList.remove("hidden");
      } else {
        profileDropdown.classList.add("hidden");
      }

      console.log(
        "Dropdown hidden class:",
        profileDropdown.classList.contains("hidden")
      ); // Debug log
    });
  }

  // Notification Dropdown Menu
  const notificationMenuButton = document.getElementById(
    "notificationMenuButton"
  );
  const notificationDropdown = document.getElementById("notificationDropdown");

  if (notificationMenuButton && notificationDropdown) {
    // Toggle dropdown on button click
    notificationMenuButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Notification button clicked!"); // Debug log

      // Close profile dropdown if open
      if (profileDropdown && !profileDropdown.classList.contains("hidden")) {
        profileDropdown.classList.add("hidden");
      }

      // Close filter dropdown if open
      const filterDropdown = document.getElementById("filterDropdown");
      if (filterDropdown && !filterDropdown.classList.contains("hidden")) {
        filterDropdown.classList.add("hidden");
      }

      if (notificationDropdown.classList.contains("hidden")) {
        // Position the dropdown relative to the button
        const buttonRect = notificationMenuButton.getBoundingClientRect();
        notificationDropdown.style.top = buttonRect.bottom + 8 + "px";
        notificationDropdown.style.right =
          window.innerWidth - buttonRect.right + "px";
        notificationDropdown.classList.remove("hidden");
      } else {
        notificationDropdown.classList.add("hidden");
      }

      console.log(
        "Notification dropdown hidden class:",
        notificationDropdown.classList.contains("hidden")
      ); // Debug log
    });
  }

  // Filter Dropdown Menu
  const filterButton = document.getElementById("filterButton");
  const filterDropdown = document.getElementById("filterDropdown");

  if (filterButton && filterDropdown) {
    // Toggle dropdown on button click
    filterButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("Filter button clicked!"); // Debug log

      // Close profile dropdown if open
      if (profileDropdown && !profileDropdown.classList.contains("hidden")) {
        profileDropdown.classList.add("hidden");
      }

      // Close notification dropdown if open
      if (
        notificationDropdown &&
        !notificationDropdown.classList.contains("hidden")
      ) {
        notificationDropdown.classList.add("hidden");
      }

      if (filterDropdown.classList.contains("hidden")) {
        // Position the dropdown relative to the button
        const buttonRect = filterButton.getBoundingClientRect();
        filterDropdown.style.top = buttonRect.bottom + 8 + "px";
        filterDropdown.style.right =
          window.innerWidth - buttonRect.right + "px";
        filterDropdown.classList.remove("hidden");
      } else {
        filterDropdown.classList.add("hidden");
      }

      console.log(
        "Filter dropdown hidden class:",
        filterDropdown.classList.contains("hidden")
      ); // Debug log
    });
  }

  // Close dropdowns when clicking outside or pressing escape
  document.addEventListener("click", function (e) {
    // Close profile dropdown
    if (
      profileMenuButton &&
      profileDropdown &&
      !profileMenuButton.contains(e.target) &&
      !profileDropdown.contains(e.target)
    ) {
      profileDropdown.classList.add("hidden");
    }

    // Close notification dropdown
    if (
      notificationMenuButton &&
      notificationDropdown &&
      !notificationMenuButton.contains(e.target) &&
      !notificationDropdown.contains(e.target)
    ) {
      notificationDropdown.classList.add("hidden");
    }

    // Close filter dropdown
    if (
      filterButton &&
      filterDropdown &&
      !filterButton.contains(e.target) &&
      !filterDropdown.contains(e.target)
    ) {
      filterDropdown.classList.add("hidden");
    }
  });

  // Performance Gauge Chart
  const performanceGaugeCanvas = document.getElementById("performanceGauge");
  if (performanceGaugeCanvas) {
    const ctx = performanceGaugeCanvas.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [75, 25], // 75% performance, 25% remaining
            backgroundColor: [
              "#4F46E5", // Primary color for performance
              "#E5E7EB", // Light gray for remaining
            ],
            borderWidth: 0,
            cutout: "70%",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90, // Start from top
        circumference: 180, // Half circle
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  }

  // Desktop collapse/expand
  if (sidebarCollapseBtn && sidebar && mainContent) {
    sidebarCollapseBtn.addEventListener("click", function () {
      const isCollapsed = sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("sidebar-collapsed", isCollapsed);

      // Handle active link background when collapsed
      const activeLink = sidebar.querySelector('a[href="#"]');
      if (activeLink) {
        if (isCollapsed) {
          activeLink.classList.remove("bg-primary-main/[8%]");
        } else {
          activeLink.classList.add("bg-primary-main/[8%]");
        }
      }

      // Toggle icon direction (flip horizontally)
      if (sidebarCollapseIcon) {
        sidebarCollapseIcon.style.transform = isCollapsed ? "scaleX(-1)" : "";
      }
    });
  }

  // Close dropdowns on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (profileDropdown) {
        profileDropdown.classList.add("hidden");
      }
      if (notificationDropdown) {
        notificationDropdown.classList.add("hidden");
      }
      const filterDropdown = document.getElementById("filterDropdown");
      if (filterDropdown) {
        filterDropdown.classList.add("hidden");
      }
    }
  });
});
