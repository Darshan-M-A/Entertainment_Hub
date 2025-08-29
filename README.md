<img width="1885" height="925" alt="Screenshot 2025-08-30 035334" src="https://github.com/user-attachments/assets/01e9c5f3-821c-48ac-b0f6-5621c7434603" />



# 🎬 Entertainment Hub - Premium Booking Platform

A professional dark-themed entertainment booking web application for movies and concerts with complete booking workflow, interactive seat selection, and multiple payment options.

![Entertainment Hub](https://img.shields.io/badge/Entertainment-Hub-red?style=for-the-badge&logo=ticket&logoColor=white)
![Dark Theme](https://img.shields.io/badge/Theme-Dark-black?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Design-Responsive-blue?style=for-the-badge)

## 🌟 Features

### 🎭 Complete Entertainment Platform
- **Movies Booking**: Premium movie tickets at top cinema chains
- **Concert Booking**: Live concerts, classical performances, DJ nights
- **Dark Cinema Theme**: Professional theater-inspired design
- **Responsive Design**: Works perfectly on all devices

### 🎫 Advanced Booking System
- **7 Functional Tabs**: Home, Movies, Concerts, Seats, Ticket, Payment, My Bookings
- **Interactive Seat Selection**: 10x12 realistic theater layout with color coding
- **Real-time Pricing**: Dynamic price calculation with premium/regular seating
- **Professional Tickets**: QR code generation and booking confirmations

### 💳 Multiple Payment Options
- **💵 Cash Payment**: Instant booking completion - pay at counter
- **💳 Card Payment**: Credit/Debit card with validation
- **📱 UPI Payment**: Modern digital payment with QR codes

### 📊 Booking Management
- **Complete History**: View all past and upcoming bookings
- **Booking Statistics**: Total bookings, amount spent, upcoming events
- **Local Storage**: Persistent booking data across sessions

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Custom Properties, Flexbox, Grid
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Storage**: Browser Local Storage
- **Responsive**: Mobile-first design approach

## 📁 File Structure

```
entertainment-hub/
│
├── index_final.html          # Main HTML structure
├── style_updated.css           # Dark theme CSS styling
├── app_updaged.js             # Core JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Design Highlights

### Dark Cinema Theme
- **Primary Colors**: Deep Black (#1a1a1a), Dark Gray (#2d2d2d)
- **Accent Colors**: Cinema Red (#dc2626), Gold (#f59e0b)
- **Typography**: Elegant serif headers, clean sans-serif body text
- **Professional Animations**: Smooth transitions and hover effects

### Movie Collection
- Avengers: Endgame (8.4★) - Action/Adventure/Drama
- Spider-Man: No Way Home (8.2★) - Action/Adventure/Fantasy
- The Batman (7.8★) - Action/Crime/Drama
- Top Gun: Maverick (8.3★) - Action/Drama
- Doctor Strange 2 (7.0★) - Action/Adventure/Fantasy
- Black Panther: Wakanda Forever (6.7★) - Action/Adventure/Drama

### Concert Lineup
- Electric Storm Live - Rock Concert
- Symphony Under Stars - Classical Orchestra
- DJ Night Live - Electronic Music
- Acoustic Sessions - Indie Folk
- Jazz Masters - Jazz/Blues Performance
- Pop Sensation Tour - Contemporary Pop

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. **Clone or Download** the project files
2. **Extract** files to your desired directory
3. **Open** `index.html` in your web browser
4. **Start booking** movies and concerts!

### Local Development
```bash
# Option 1: Direct browser opening
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000

# Option 3: Live Server (VS Code Extension)
# Right-click index.html → "Open with Live Server"
```

## 📱 Usage Guide

### 🏠 Home Page
- Browse featured movies and concerts
- Use search functionality to find specific content
- Navigate using the top menu tabs

### 🎬 Movies Tab
1. View movie grid with ratings and details
2. Click "Book Now" on desired movie
3. Select venue and showtime
4. Proceed to seat selection

### 🎵 Concerts Tab
1. Browse concert listings with artist details
2. Check venue and date information
3. Select preferred timing
4. Continue to seat selection

### 💺 Seat Selection
- **Green**: Available seats
- **Blue**: Your selected seats
- **Red**: Already booked (unavailable)
- **Gold**: Premium seats (higher price)
- Maximum 10 seats per booking

### 🎫 Ticket Generation
- Review booking details
- View professional ticket with QR code
- Proceed to payment options

### 💳 Payment Process
- **Cash**: Instant confirmation - pay at venue
- **Card**: Fill card details and process payment
- **UPI**: Enter UPI ID or scan QR code

### 📚 My Bookings
- View complete booking history
- Track total spending and upcoming events
- Access booking details and confirmations

## 🎯 Key Features Explained

### Interactive Seat Selection
```javascript
// Smart seat management with pricing
- Real-time availability checking
- Premium vs Regular pricing tiers
- Maximum seat selection limits
- Visual feedback for selections
```

### Professional Ticket System
```javascript
// Complete booking workflow
- Unique booking ID generation
- QR code placeholder for entry
- Detailed venue and timing info
- Professional ticket design
```

### Dark Theme Implementation
```css
/* Cinema-inspired color scheme */
--primary-dark: #1a1a1a;
--secondary-dark: #2d2d2d;
--accent-red: #dc2626;
--accent-gold: #f59e0b;
```

## 📊 Performance Features

- **Fast Loading**: Optimized CSS and JavaScript
- **Responsive Images**: Properly sized movie posters
- **Local Storage**: Quick data persistence
- **Smooth Animations**: 60fps transitions
- **Mobile Optimized**: Touch-friendly interface

## 🎪 Venue Information

### Movie Theaters
**Mumbai**: PVR Phoenix Mills, INOX Megaplex
**Delhi**: PVR Select City Walk, INOX Nehru Place

### Concert Venues
**Mumbai**: Blue Arena, Concert Hall
**Delhi**: Heritage Theater, Stadium Arena

## 🔧 Customization

### Adding New Movies
```javascript
// In app.js, add to movies array
{
    id: 7,
    title: "Your Movie Title",
    genre: "Genre",
    rating: 8.0,
    duration: "2h 30m",
    poster: "image-url",
    price: {regular: 200, premium: 300}
}
```

### Adding New Venues
```javascript
// In venues object
"city-name": [
    {
        id: 15,
        name: "New Venue Name",
        address: "Venue Address",
        type: "movie" // or "concert"
    }
]
```

## 🐛 Troubleshooting

### Common Issues
1. **Images not loading**: Check internet connection
2. **Booking not saving**: Enable browser local storage
3. **Mobile display issues**: Try refreshing the page
4. **Payment not working**: This is a demo - no real transactions

### Browser Compatibility
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🚀 Future Enhancements

- [ ] Real payment gateway integration
- [ ] User authentication system
- [ ] Email booking confirmations
- [ ] More cities and venues
- [ ] Movie trailers integration
- [ ] Social media sharing
- [ ] Booking cancellation feature
- [ ] Rating and review system

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please:
- Create an issue in the repository
- Check the troubleshooting section
- Review the usage guide

## 🙏 Acknowledgments

- Movie posters used for demonstration purposes
- Concert images from professional photography
- Design inspired by modern cinema booking platforms<img width="1867" height="915" alt="Screenshot 2025-08-30 035437" src="https://github.com/user-attachments/assets/79d89186-c2ba-4a06-b799-2ab98c006c67" />
<img width="1880" height="927" alt="Screenshot 2025-08-30 035454" src="https://github.com/user-attachments/assets/53eef6e8-9ca9-40a2-a02c-ee5b9dc17876" />
<img width="1395" height="912" alt="Screenshot 2025-08-30 035507" src="https://github.com/user-attachments/assets/3326de4e-6e2d-4b5b-a275-fa7a7b872cc4" />
<img width="1887" height="902" alt="Screenshot 2025-08-30 035554" src="https://github.com/user-attachments/assets/f6252a19-5eef-46fc-871c-6a724c40b3ae" />
<img width="1885" height="925" alt="Screenshot 2025-08-30 035334" src="https://github.com/user-attachments/assets/167a5ec6-1dce-4362-a910-131a24a6dfe5" />
<img width="1878" height="919" alt="Screenshot 2025-08-30 035345" src="https://github.com/user-attachments/assets/2c71afce-a907-4147-85ea-9c0d9317f12e" />
<img width="1879" height="919" alt="Screenshot 2025-08-30 035400" src="https://github.com/user-attachments/assets/9af4ca32-c198-4c98-99ee-029d53e01d93" />
<img width="1877" height="912" alt="Screenshot 2025-08-30 035417" src="https://github.com/user-attachments/assets/7214d98f-658a-4b99-8cf2-ebe7038b2a36" />
<img width="1871" height="901" alt="Screenshot 2025-08-30 035427" src="https://github.com/user-attachments/assets/20fcdc87-e6e7-42de-a348-e53f4d2e3fbd" />

- Icons and fonts from Google Fonts and various sources

---

**Entertainment Hub** - *Experience Premium Entertainment Like Never Before* 🎬✨

Made with ❤️ for movie and concert lovers worldwide.




