# KANTAMANTO — MVP FIGMA PAGE INVENTORY

## Total: 35 Core Pages

These pages cover the essential **Customer, Vendor and Admin** functionality required to launch the MVP.

Future functionality such as AI, chat, wishlist, reviews, coupons, advanced analytics, notifications and advertising is intentionally excluded for now.

---

# PUBLIC MARKETPLACE

### Page 1 — Landing Page
Main Kantamanto homepage.

Includes:

Hero section  
Main search bar  
Product categories  
Featured products  
Popular products  
Deals  
Popular vendors/stores  
Become a Vendor CTA  
Header and footer

---

### Page 2 — Products / Search Results Page
The central marketplace discovery page.

Instead of creating separate pages for:

Search results  
Category results  
Subcategories  
Filtering  
Sorting

they will all use this one page.

Includes:

Search results  
Category navigation  
Filter sidebar  
Price filter  
Vendor filter  
Rating filter  
Availability filter  
Condition filter  
Discount filter  
Sort controls  
Product grid  
Pagination

Example:

`/products?search=mens+sneakers`

or

`/products?category=electronics`

---

### Page 3 — Product Details Page
Complete information about an individual product.

Includes:

Product gallery  
Product name  
Price  
Old price  
Discount  
Rating  
Description  
Specifications  
Stock status  
Variants  
Quantity  
Vendor information  
Verified Vendor badge  
Add to Cart  
Buy Now

---

### Page 4 — Vendor Storefront
Public page representing a vendor.

Includes:

Store banner  
Store logo  
Vendor name  
Verification status  
Store description  
Rating  
Products  
Store information

---

# AUTHENTICATION

### Page 5 — Login Page
Shared login for customers and vendors.

Includes:

Email  
Password  
Remember me  
Forgot password  
Login  
Create account  
Become a Vendor

Role-based routing happens after authentication.

---

### Page 6 — Customer Registration Page
Customer account creation.

Includes:

Full name  
Email  
Phone  
Password  
Confirm password  
Terms acceptance

---

### Page 7 — Vendor Registration Page
Initial vendor account registration.

After registration, the vendor continues to Vendor Onboarding.

---

### Page 8 — Forgot Password Page
Enter email to begin password recovery.

---

### Page 9 — Reset Password Page
Set and confirm a new password.

Success confirmation can use the same screen/modal instead of another page.

---

# CUSTOMER APPLICATION

### Page 10 — Customer Dashboard
Customer account overview.

Includes:

Welcome section  
Recent orders  
Order statuses  
Saved addresses summary  
Account information  
Quick actions

Customer sidebar:

Dashboard  
Orders  
Profile  
Addresses  
Logout

We do **not** need a large customer dashboard for the MVP.

---

### Page 11 — Customer Profile
Customer profile management.

Includes:

Personal details  
Phone  
Email  
Profile image  
Password/security  
Saved addresses

Address creation/editing can use a modal or drawer instead of separate pages.

---

### Page 12 — Shopping Cart
Multi-vendor shopping cart.

Products are grouped according to vendor.

Example:

**Urban Wear GH**

Nike Air Max  
T-Shirt

Vendor subtotal

**Accra Electronics**

Headphones

Vendor subtotal

Then:

Subtotal  
Delivery estimate  
Discount  
Total  
Proceed to Checkout

---

### Page 13 — Checkout
Use **one checkout route with a stepper** rather than creating four different pages.

Steps:

**1. Delivery Address**

Full name  
Phone  
Region  
City  
Digital address  
Delivery instructions

**2. Delivery Method**

Available shipping methods.

**3. Payment**

Payment method selection.

**4. Review**

Products  
Vendors  
Delivery  
Payment method  
Totals  
Place Order

The Figma file may show each step as a frame, but developers still implement them within the same checkout flow.

---

### Page 14 — Order Confirmation
Displayed after successful order placement.

Includes:

Success message  
Order number  
Order total  
Estimated delivery  
View Order  
Continue Shopping

---

### Page 15 — My Orders
Customer order history.

Includes:

Order ID  
Date  
Vendor  
Products  
Total  
Payment status  
Order status

Filters:

All  
Pending  
Processing  
Shipped  
Delivered  
Cancelled

---

### Page 16 — Customer Order Details & Tracking
One page handles both order details and basic tracking.

Includes:

Order number  
Products  
Vendor  
Payment information  
Delivery address  
Order total  
Order progress

Progress example:

Placed → Confirmed → Processing → Shipped → Delivered

---

# VENDOR ONBOARDING

### Page 17 — Vendor Onboarding
Use **one multi-step onboarding experience** rather than giving each step its own page.

Steps:

**Step 1 — Personal Information**

**Step 2 — Business Information**

**Step 3 — Store Information**

**Step 4 — Verification Information**

**Step 5 — Review & Submit**

---

### Page 18 — Vendor Verification Status
Shows:

Pending  
Verified  
Rejected  
Suspended

Example:

**Verification Pending**

Your application is currently being reviewed.

Rejected vendors can also see the reason and update their information from here.

---

# VENDOR APPLICATION

### Page 19 — Vendor Dashboard
Main vendor overview.

Cards:

Today's Sales  
Total Sales  
Orders  
Pending Orders  
Products  
Low Stock

Also includes:

Recent orders  
Recent products  
Basic sales chart  
Inventory warning

---

### Page 20 — Store Profile
Vendor store configuration.

Includes:

Store name  
Store logo  
Banner  
Description  
Contact information  
Store policies  
Store preview

---

### Page 21 — Vendor Products
Main product management page.

Tabs:

All Products  
Active  
Draft  
Out of Stock  
Archived

Actions:

Add Product  
Edit  
Delete  
Archive  
Search  
Filter

---

### Page 22 — Add / Edit Product
One reusable page handles both creation and editing.

Sections:

Basic Information  
Description  
Category  
Price  
Discount  
Product images  
SKU  
Inventory  
Variants  
Weight  
Dimensions  
Shipping information

Actions:

Save Draft  
Preview  
Publish / Update

---

### Page 23 — Inventory Management
Inventory-specific management.

Includes:

Product  
SKU  
Current stock  
Availability  
Low-stock status

Actions:

Update stock  
Search  
Filter  
View product

---

### Page 24 — Vendor Orders
All orders involving the vendor.

Includes:

Order ID  
Customer  
Products  
Quantity  
Amount  
Payment status  
Order status  
Date

Filters:

New  
Accepted  
Processing  
Shipped  
Delivered  
Cancelled

---

### Page 25 — Vendor Order Details
Complete order management page.

Includes:

Customer  
Products  
Quantity  
Order value  
Delivery information  
Payment status  
Order status

Actions:

Accept Order  
Start Processing  
Mark as Shipped  
Cancel

---

# ADMIN APPLICATION

### Page 26 — Admin Login
Separate administrative authentication interface.

---

### Page 27 — Admin Dashboard
Main marketplace overview.

Cards:

Total Users  
Total Vendors  
Verified Vendors  
Pending Vendors  
Total Products  
Total Orders  
Marketplace Revenue

Basic charts:

Sales over time  
Orders over time  
User growth  
Vendor growth  
Popular categories

We do not need the massive advanced analytics system during MVP.

---

### Page 28 — User Management
Admin manages marketplace customers.

Includes:

Search  
Filter  
User name  
Email  
Account status  
Registration date  
Orders

Actions can appear in a side drawer:

View  
Disable  
Reactivate

This eliminates the need for a separate User Details page during MVP.

---

### Page 29 — Vendor Management
Vendor administration.

Tabs:

All Vendors  
Pending  
Verified  
Rejected  
Suspended

Includes:

Vendor  
Store  
Application date  
Verification status  
Products  
Orders

---

### Page 30 — Vendor Verification Review
Admin reviews a vendor application.

Includes:

Vendor information  
Business information  
Store information  
Verification documents

Actions:

Approve  
Reject  
Request Changes  
Suspend

---

### Page 31 — Product Moderation
Admin marketplace product management.

Tabs:

All Products  
Pending  
Approved  
Rejected  
Hidden

Includes:

Product  
Vendor  
Category  
Price  
Stock  
Moderation status

---

### Page 32 — Product Moderation Details
Admin examines an individual product.

Includes:

Product images  
Description  
Specifications  
Price  
Category  
Vendor  
Inventory  
Moderation history

Actions:

Approve  
Reject  
Hide  
Remove

---

### Page 33 — Order Monitoring
Admin can inspect all marketplace orders.

Includes:

Order ID  
Customer  
Vendor  
Amount  
Payment status  
Order status  
Date

Admin primarily monitors orders rather than fulfilling them.

---

### Page 34 — Admin Order Details
Full marketplace order information.

Includes:

Customer  
Vendor  
Products  
Payment  
Delivery  
Order timeline  
Order status

---

### Page 35 — Category Management
Needed because vendors must select valid marketplace categories when creating products.

Includes:

Categories  
Subcategories  
Status  
Product count

Actions:

Add category  
Edit category  
Add subcategory  
Activate/deactivate

---

# MVP PAGE COUNT

| Area | Pages |
|---|---:|
| Public Marketplace | 4 |
| Authentication | 5 |
| Customer | 7 |
| Vendor Onboarding | 2 |
| Vendor Application | 7 |
| Admin | 10 |
| **Total** | **35** |

---

# FEATURES WE ARE DELIBERATELY LEAVING OUT OF MVP

These should **not increase our current page count**.

They can come after the first working version:

Customer ↔ Vendor Chat  
AI Shopping Assistant  
Wishlist  
Reviews and Ratings  
Notifications Centre  
Coupons  
Loyalty programme  
Referral programme  
Marketplace wallet  
Advanced search  
Search autocomplete  
Product comparison  
Vendor advertising  
Sponsored products  
Advanced vendor analytics  
Advanced admin analytics  
Support-ticket system  
Customer recommendations  
Price-drop alerts  
Back-in-stock alerts

---

# COMPONENTS THAT ARE NOT SEPARATE PAGES

Several important interfaces should be designed as reusable components rather than additional routes.

These include:

Search suggestions  
Account dropdown  
Category mega-menu  
Mini cart  
Mobile navigation  
Filter drawer  
Sort dropdown  
Add-to-cart confirmation  
Delete confirmation  
Logout confirmation  
Toast notifications  
Image upload component  
Product image viewer  
Quantity selector  
Vendor badge  
Order status badge  
Pagination  
Date picker  
Address selector  
Confirmation dialogs

---

# UI STATES ARE ALSO NOT SEPARATE PAGE NUMBERS

Every important MVP screen will still receive the required states:

**Loading**

Skeleton loaders rather than unnecessary standalone pages.

**Empty**

Examples:

Cart empty  
No orders  
No products  
No inventory  
No vendors

**Error**

Something went wrong.

**No Search Results**

No products matched your search.

**Success**

Product added  
Profile updated  
Order placed  
Product published  
Vendor approved

**Disabled**

Unavailable action.

**Unauthorised**

Login required.

**Permission Denied**

Wrong role or insufficient permissions.

**Out of Stock**

Product cannot currently be purchased.

---

# RESPONSIVE DESIGN

We will eventually produce responsive versions of the important pages at:

**Desktop — 1440 px**

**Tablet — 768 px**

**Mobile — 390 px**

These responsive designs do **not** change the master numbering.

For example:

Page 3 Desktop  
Page 3 Tablet  
Page 3 Mobile

are still all:

**Page 3 — Product Details**

---

# MVP DEVELOPMENT FLOW

The most important customer flow becomes:

**Page 1**  
Landing

→ **Page 2**  
Search/Browse Products

→ **Page 3**  
Product Details

→ **Page 12**  
Cart

→ **Page 13**  
Checkout

→ **Page 14**  
Order Confirmation

→ **Page 15**  
Orders

→ **Page 16**  
Order Details

The vendor flow becomes:

**Page 7**  
Vendor Registration

→ **Page 17**  
Vendor Onboarding

→ **Page 18**  
Verification Status

→ **Page 19**  
Vendor Dashboard

→ **Page 21**  
Products

→ **Page 22**  
Add Product

→ **Page 24**  
Orders

→ **Page 25**  
Order Details

The admin flow becomes:

**Page 26**  
Admin Login

→ **Page 27**  
Admin Dashboard

→ **Page 29**  
Vendor Management

→ **Page 30**  
Vendor Verification

→ **Page 31**  
Product Moderation

→ **Page 33**  
Order Monitoring

---

# FINAL MVP SCOPE

## 35 Core Pages

This is a much more reasonable size for the first Kantamanto Figma prototype and development phase.

It gives us a **fully functional marketplace** rather than a prototype overloaded with functionality that developers will not implement immediately.

Most importantly, it still completes the three essential sides of the marketplace:

**Customer**

Discover → Buy → Checkout → Track Orders

**Vendor**

Register → Get Verified → Create Store → Add Products → Manage Inventory → Fulfil Orders

**Admin**

Manage Users → Verify Vendors → Moderate Products → Monitor Orders

After the MVP is built and stable, we can create a **separate V1 page inventory** for Chat, Wishlist, Reviews, Notifications and Coupons rather than mixing those features into the initial development.