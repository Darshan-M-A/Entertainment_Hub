// Application Data
const appData = {
    movies: [
        {
            id: 1,
            title: "Avengers: Endgame",
            genre: "Action, Adventure, Drama",
            rating: 8.4,
            duration: "3h 1m",
            language: "English",
            poster: "https://pplx-res.cloudinary.com/image/upload/v1756489344/pplx_project_search_images/d29fcb31d36c77b5d34e2a5d851386f9b04af554.png",
            description: "The ultimate superhero epic conclusion",
            showtimes: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM", "11:15 PM"],
            price: {regular: 200, premium: 300}
        },
        {
            id: 2,
            title: "Spider-Man: No Way Home",
            genre: "Action, Adventure, Fantasy",
            rating: 8.2,
            duration: "2h 28m",
            language: "English",
            poster: "https://pplx-res.cloudinary.com/image/upload/v1756489344/pplx_project_search_images/93b369d535b86e5597945e4c06c94f9a4f229781.png",
            description: "The multiverse adventure continues",
            showtimes: ["11:00 AM", "2:15 PM", "5:30 PM", "8:45 PM"],
            price: {regular: 180, premium: 280}
        },
        {
            id: 3,
            title: "The Batman",
            genre: "Action, Crime, Drama",
            rating: 7.8,
            duration: "2h 56m",
            language: "English",
            poster: "https://pplx-res.cloudinary.com/image/upload/v1756489345/pplx_project_search_images/ffd5d1d77a80d784764b27051ebf0261de89e60f.png",
            description: "Dark knight returns to Gotham",
            showtimes: ["12:30 PM", "3:45 PM", "7:00 PM", "10:15 PM"],
            price: {regular: 220, premium: 320}
        },
        {
            id: 4,
            title: "Top Gun: Maverick",
            genre: "Action, Drama",
            rating: 8.3,
            duration: "2h 10m",
            language: "English",
            poster: "https://pplx-res.cloudinary.com/image/upload/v1756489344/pplx_project_search_images/281a61b671885a2e18fed962d3f43b21e6f85fcf.png",
            description: "High-flying action adventure",
            showtimes: ["10:30 AM", "2:00 PM", "5:15 PM", "8:30 PM"],
            price: {regular: 250, premium: 350}
        },
        {
            id: 5,
            title: "Doctor Strange 2",
            genre: "Action, Adventure, Fantasy",
            rating: 7.0,
            duration: "2h 6m",
            language: "English",
            poster: "https://pplx-res.cloudinary.com/image/upload/v1756489344/pplx_project_search_images/e77a8d5823196ee1571566b9ba1bbf1e9644f1e5.png",
            description: "Multiverse of magical madness",
            showtimes: ["11:15 AM", "2:30 PM", "5:45 PM", "9:00 PM"],
            price: {regular: 200, premium: 300}
        },
        {
            id: 6,
            title: "Black Panther: Wakanda Forever",
            genre: "Action, Adventure, Drama",
            rating: 6.7,
            duration: "2h 41m",
            language: "English",
            poster: "https://filmartgallery.com/cdn/shop/files/Avengers-Endgame-250-Light-Purple-International-Poster-Vintage-Movie-Poster-Original.jpeg?v=1738907247",
            description: "Honor the legacy of Wakanda",
            showtimes: ["10:00 AM", "1:15 PM", "4:30 PM", "7:45 PM", "11:00 PM"],
            price: {regular: 190, premium: 290}
        }
    ],
    concerts: [
        {
            id: 101,
            title: "Electric Storm Live",
            artist: "Electric Storm Band",
            genre: "Rock, Alternative",
            venue: "Blue Arena",
            date: "2024-12-15",
            image: "https://pplx-res.cloudinary.com/image/upload/v1756492084/pplx_project_search_images/66baa9803d0da7c556fbc765b22013404cdab899.png",
            description: "High-energy rock concert experience",
            showtimes: ["7:00 PM", "9:30 PM"],
            price: {regular: 1500, premium: 2500, vip: 4000}
        },
        {
            id: 102,
            title: "Symphony Under Stars",
            artist: "Metropolitan Orchestra",
            genre: "Classical, Orchestral",
            venue: "Concert Hall",
            date: "2024-12-18",
            image: "https://pplx-res.cloudinary.com/image/upload/v1756492084/pplx_project_search_images/fc3e37b7834c38c0f7201b637f04624e498ba7c4.png",
            description: "Enchanting classical music evening",
            showtimes: ["6:00 PM", "8:30 PM"],
            price: {regular: 1200, premium: 2000, vip: 3500}
        },
        {
            id: 103,
            title: "DJ Night Live",
            artist: "Various DJs",
            genre: "Electronic, Dance",
            venue: "Club Central",
            date: "2024-12-20",
            image: "https://pplx-res.cloudinary.com/image/upload/v1756492084/pplx_project_search_images/7bee4b8abcdbfa072640b1e9dc9f71d8c9df359e.png",
            description: "Ultimate electronic music experience",
            showtimes: ["9:00 PM", "11:30 PM"],
            price: {regular: 800, premium: 1200, vip: 2000}
        },
        {
            id: 104,
            title: "Acoustic Sessions",
            artist: "Indie Collective",
            genre: "Indie, Folk",
            venue: "Intimate Venue",
            date: "2024-12-22",
            image: "https://pplx-res.cloudinary.com/image/upload/v1756492084/pplx_project_search_images/19419e346163b6f250b95ae6351d52ba48073bba.png",
            description: "Intimate acoustic performances",
            showtimes: ["7:30 PM", "9:45 PM"],
            price: {regular: 1000, premium: 1500, vip: 2500}
        },
        {
            id: 105,
            title: "Jazz Masters",
            artist: "Jazz Legends",
            genre: "Jazz, Blues",
            venue: "Heritage Theater",
            date: "2024-12-25",
            image: "https://pplx-res.cloudinary.com/image/upload/v1754796181/pplx_project_search_images/f986800e7c2f90dc4b7e1560ce7807e6c01d976b.png",
            description: "Smooth jazz and blues evening",
            showtimes: ["7:30 PM", "9:45 PM"],
            price: {regular: 1400, premium: 2200, vip: 3800}
        },
        {
            id: 106,
            title: "Pop Sensation Tour",
            artist: "Pop Superstar",
            genre: "Pop, Contemporary",
            venue: "Stadium",
            date: "2024-12-28",
            image: "https://pplx-res.cloudinary.com/image/upload/v1756492084/pplx_project_search_images/76ad2d92791e5999eed161381476806c54100fd2.png",
            description: "Chart-topping hits and spectacular production",
            showtimes: ["6:30 PM", "9:00 PM"],
            price: {regular: 1800, premium: 3000, vip: 5000}
        }
    ],
    venues: {
        mumbai: [
            {id: 1, name: "PVR Phoenix Mills", address: "Lower Parel", type: "movie"},
            {id: 2, name: "INOX Megaplex", address: "Malad", type: "movie"},
            {id: 11, name: "Blue Arena", address: "BKC", type: "concert"},
            {id: 12, name: "Concert Hall", address: "Nariman Point", type: "concert"}
        ],
        delhi: [
            {id: 4, name: "PVR Select City Walk", address: "Saket", type: "movie"},
            {id: 5, name: "INOX Nehru Place", address: "Nehru Place", type: "movie"},
            {id: 13, name: "Heritage Theater", address: "CP", type: "concert"},
            {id: 14, name: "Stadium Arena", address: "Dwarka", type: "concert"}
        ]
    }
};

// Application State
let appState = {
    currentSection: 'home',
    selectedCity: 'mumbai',
    selectedItem: null,
    selectedVenue: null,
    selectedShowtime: null,
    selectedSeats: [],
    currentBooking: null,
    paymentMethod: null,
    bookings: [],
    theme: 'light' // Theme preference: 'light' or 'dark'
};

// Seat Configuration
const seatConfig = {
    rows: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    seatsPerRow: 12,
    vipRows: ["A", "B"],
    premiumRows: ["C", "D"],
    regularRows: ["E", "F", "G", "H", "I", "J"]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderFeaturedContent();
    renderMovies();
    renderConcerts();
    loadBookings();
    initializeTheme();
    showSection('home');
}

function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
            updateActiveNavLink(this);
        });
    });

    // City selectors
    document.getElementById('citySelector').addEventListener('change', function() {
        appState.selectedCity = this.value;
        if (appState.currentSection === 'venues') {
            renderVenues();
        }
    });

    document.getElementById('concertCitySelector').addEventListener('change', function() {
        appState.selectedCity = this.value;
        if (appState.currentSection === 'venues') {
            renderVenues();
        }
    });


    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionName).classList.add('active');
    appState.currentSection = sectionName;

    // Update navigation
    const navLink = document.querySelector(`[data-section="${sectionName}"]`);
    if (navLink) {
        updateActiveNavLink(navLink);
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function renderFeaturedContent() {
    // Featured Movies
    const featuredMovies = document.getElementById('featuredMovies');
    const movieCards = appData.movies.slice(0, 3).map(movie => createFeaturedMovieCard(movie)).join('');
    featuredMovies.innerHTML = movieCards;

    // Featured Concerts
    const featuredConcerts = document.getElementById('featuredConcerts');
    const concertCards = appData.concerts.slice(0, 3).map(concert => createFeaturedConcertCard(concert)).join('');
    featuredConcerts.innerHTML = concertCards;
}

function createFeaturedMovieCard(movie) {
    return `
        <div class="movie-card" onclick="selectItem(${movie.id}, 'movie')">
            <div class="movie-poster" style="background-image: url('${movie.poster}')">
                <div class="movie-rating">⭐ ${movie.rating}</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-details">
                    <span>${movie.duration}</span>
                </div>
            </div>
        </div>
    `;
}

function createFeaturedConcertCard(concert) {
    return `
        <div class="concert-card" onclick="selectItem(${concert.id}, 'concert')">
            <div class="concert-image" style="background-image: url('${concert.image}')">
                <div class="concert-date">${formatDate(concert.date)}</div>
            </div>
            <div class="concert-info">
                <div class="concert-title">${concert.title}</div>
                <div class="concert-artist">${concert.artist}</div>
            </div>
        </div>
    `;
}

function renderMovies() {
    const moviesGrid = document.getElementById('moviesGrid');
    const movieCards = appData.movies.map(movie => createMovieCard(movie)).join('');
    moviesGrid.innerHTML = movieCards;
}

function createMovieCard(movie) {
    return `
        <div class="movie-card" onclick="selectItem(${movie.id}, 'movie')">
            <div class="movie-poster" style="background-image: url('${movie.poster}')">
                <div class="movie-rating">⭐ ${movie.rating}</div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-details">
                    <span>${movie.duration}</span>
                    <span>${movie.language}</span>
                </div>
                <div class="movie-genre">${movie.genre}</div>
                <button class="btn btn--primary btn--full-width" onclick="event.stopPropagation(); selectItem(${movie.id}, 'movie')">Book Now</button>
            </div>
        </div>
    `;
}

function renderConcerts() {
    const concertsGrid = document.getElementById('concertsGrid');
    const concertCards = appData.concerts.map(concert => createConcertCard(concert)).join('');
    concertsGrid.innerHTML = concertCards;
}

function createConcertCard(concert) {
    return `
        <div class="concert-card" onclick="selectItem(${concert.id}, 'concert')">
            <div class="concert-image" style="background-image: url('${concert.image}')">
                <div class="concert-date">${formatDate(concert.date)}</div>
            </div>
            <div class="concert-info">
                <div class="concert-title">${concert.title}</div>
                <div class="concert-artist">${concert.artist}</div>
                <div class="concert-details">
                    <span>${concert.genre}</span>
                    <span>${concert.venue}</span>
                </div>
                <button class="btn btn--primary btn--full-width" onclick="event.stopPropagation(); selectItem(${concert.id}, 'concert')">Book Now</button>
            </div>
        </div>
    `;
}

function selectItem(itemId, type) {
    if (type === 'movie') {
        appState.selectedItem = appData.movies.find(m => m.id === itemId);
        document.getElementById('venueTitle').textContent = 'Select Theatre & Timing';
    } else {
        appState.selectedItem = appData.concerts.find(c => c.id === itemId);
        document.getElementById('venueTitle').textContent = 'Select Venue & Timing';
    }
    
    renderSelectedItemInfo();
    renderVenues();
    showSection('venues');
}

function renderSelectedItemInfo() {
    if (!appState.selectedItem) return;

    const item = appState.selectedItem;
    const infoContainer = document.getElementById('selectedItemInfo');
    
    const isMovie = item.duration !== undefined;
    const imageUrl = isMovie ? item.poster : item.image;
    const details = isMovie ? 
        `${item.genre} • ${item.duration} • ⭐ ${item.rating}` :
        `${item.artist} • ${item.genre} • ${formatDate(item.date)}`;

    infoContainer.innerHTML = `
        <div class="selected-item-poster" style="background-image: url('${imageUrl}')"></div>
        <div class="selected-item-details">
            <h3>${item.title}</h3>
            <div class="selected-item-meta">${details}</div>
            <p>${item.description}</p>
        </div>
    `;
}

function renderVenues() {
    const venuesList = document.getElementById('venuesList');
    const cityVenues = appData.venues[appState.selectedCity] || [];
    const isMovie = appState.selectedItem && appState.selectedItem.duration !== undefined;
    const venueType = isMovie ? 'movie' : 'concert';
    
    const filteredVenues = cityVenues.filter(venue => venue.type === venueType);

    if (filteredVenues.length === 0) {
        venuesList.innerHTML = `
            <div class="empty-state">
                <h3>No venues available</h3>
                <p>Please select a different city</p>
            </div>
        `;
        return;
    }

    const venuesHTML = filteredVenues.map(venue => `
        <div class="venue-card">
            <div class="venue-header">
                <div>
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-address">${venue.address}, ${capitalizeFirst(appState.selectedCity)}</div>
                </div>
            </div>
            <div class="showtimes">
                ${appState.selectedItem.showtimes.map(time => `
                    <button class="showtime-btn" onclick="selectShowtime(${venue.id}, '${time}')">
                        ${time}
                    </button>
                `).join('')}
            </div>
        </div>
    `).join('');

    venuesList.innerHTML = venuesHTML;
}

function selectShowtime(venueId, showtime) {
    const allVenues = Object.values(appData.venues).flat();
    appState.selectedVenue = allVenues.find(v => v.id === venueId);
    appState.selectedShowtime = showtime;
    appState.selectedSeats = [];
    
    renderBookingInfo();
    renderSeatMap();
    showSection('seats');
}

function renderBookingInfo() {
    if (!appState.selectedItem || !appState.selectedVenue) return;

    const bookingInfo = document.getElementById('bookingInfo');
    const isMovie = appState.selectedItem.duration !== undefined;
    
    bookingInfo.innerHTML = `
        <div class="booking-detail">
            <div class="booking-detail-label">${isMovie ? 'Movie' : 'Concert'}</div>
            <div class="booking-detail-value">${appState.selectedItem.title}</div>
        </div>
        <div class="booking-detail">
            <div class="booking-detail-label">${isMovie ? 'Theatre' : 'Venue'}</div>
            <div class="booking-detail-value">${appState.selectedVenue.name}</div>
        </div>
        <div class="booking-detail">
            <div class="booking-detail-label">Date & Time</div>
            <div class="booking-detail-value">Today, ${appState.selectedShowtime}</div>
        </div>
        <div class="booking-detail">
            <div class="booking-detail-label">City</div>
            <div class="booking-detail-value">${capitalizeFirst(appState.selectedCity)}</div>
        </div>
    `;
}

function renderSeatMap() {
    const seatMap = document.getElementById('seatMap');
    const bookedSeats = generateRandomBookedSeats(30);
    
    const seatMapHTML = seatConfig.rows.map(row => {
        const seats = Array.from({length: seatConfig.seatsPerRow}, (_, index) => {
            const seatNumber = index + 1;
            const seatId = `${row}${seatNumber}`;
            const isBooked = bookedSeats.includes(seatId);
            
            let seatClass = 'seat ';
            let seatType = 'regular';
            
            if (isBooked) {
                seatClass += 'booked';
            } else if (seatConfig.vipRows.includes(row)) {
                seatClass += 'vip';
                seatType = 'vip';
            } else if (seatConfig.premiumRows.includes(row)) {
                seatClass += 'premium';
                seatType = 'premium';
            } else {
                seatClass += 'available';
            }
            
            return `
                <div class="${seatClass}" 
                     data-seat="${seatId}" 
                     data-type="${seatType}"
                     onclick="toggleSeat('${seatId}', '${seatType}')">
                    ${seatNumber}
                </div>
            `;
        }).join('');
        
        return `
            <div class="seat-row">
                <div class="row-label">${row}</div>
                <div class="seats-container">${seats}</div>
            </div>
        `;
    }).join('');
    
    seatMap.innerHTML = seatMapHTML;
    updateBookingSummary();
}

function generateRandomBookedSeats(count) {
    const bookedSeats = [];
    const allSeats = [];
    
    seatConfig.rows.forEach(row => {
        for (let i = 1; i <= seatConfig.seatsPerRow; i++) {
            allSeats.push(`${row}${i}`);
        }
    });
    
    while (bookedSeats.length < count) {
        const randomIndex = Math.floor(Math.random() * allSeats.length);
        const seat = allSeats[randomIndex];
        if (!bookedSeats.includes(seat)) {
            bookedSeats.push(seat);
        }
    }
    
    return bookedSeats;
}

function toggleSeat(seatId, seatType) {
    const seatElement = document.querySelector(`[data-seat="${seatId}"]`);
    
    if (seatElement.classList.contains('booked')) {
        return;
    }
    
    const seatIndex = appState.selectedSeats.findIndex(seat => seat.id === seatId);
    
    if (seatIndex > -1) {
        // Deselect seat
        appState.selectedSeats.splice(seatIndex, 1);
        seatElement.classList.remove('selected');
        seatElement.classList.add(seatType);
    } else {
        // Select seat (max 10 seats)
        if (appState.selectedSeats.length >= 10) {
            alert('You can select maximum 10 seats');
            return;
        }
        
        const price = getSeatPrice(seatType);
        appState.selectedSeats.push({
            id: seatId,
            type: seatType,
            price: price
        });
        
        seatElement.classList.add('selected');
        seatElement.classList.remove('available', 'premium', 'vip');
    }
    
    updateBookingSummary();
}

function getSeatPrice(seatType) {
    const prices = appState.selectedItem.price;
    return prices[seatType] || prices.regular;
}

function updateBookingSummary() {
    const selectedSeatsList = document.getElementById('selectedSeatsList');
    const totalAmount = document.getElementById('totalAmount');
    const proceedBtn = document.getElementById('proceedToTicketBtn');
    
    if (appState.selectedSeats.length === 0) {
        selectedSeatsList.innerHTML = '<p>No seats selected</p>';
        totalAmount.textContent = 'Total: ₹0';
        proceedBtn.disabled = true;
    } else {
        const seatsHTML = appState.selectedSeats.map(seat => `
            <div class="seat-item">
                <span>Seat ${seat.id} (${capitalizeFirst(seat.type)})</span>
                <span>₹${seat.price}</span>
            </div>
        `).join('');
        
        const total = appState.selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
        
        selectedSeatsList.innerHTML = seatsHTML;
        totalAmount.textContent = `Total: ₹${total}`;
        proceedBtn.disabled = false;
    }
}

function generateTicket() {
    if (!appState.selectedItem || !appState.selectedVenue || appState.selectedSeats.length === 0) return;

    const ticketId = `EH-${Date.now().toString().slice(-6)}`;
    const total = appState.selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
    const isMovie = appState.selectedItem.duration !== undefined;

    appState.currentBooking = {
        id: ticketId,
        item: appState.selectedItem,
        venue: appState.selectedVenue,
        showtime: appState.selectedShowtime,
        seats: appState.selectedSeats,
        city: appState.selectedCity,
        total: total,
        date: new Date().toLocaleDateString(),
        type: isMovie ? 'movie' : 'concert'
    };

    renderTicketPreview();
    generateQRCode(ticketId);
}

function renderTicketPreview() {
    if (!appState.currentBooking) {
        generateTicket();
    }

    const booking = appState.currentBooking;
    const isMovie = booking.type === 'movie';

    document.getElementById('ticketId').textContent = `Ticket ID: #${booking.id}`;
    
    document.getElementById('ticketMainInfo').innerHTML = `
        <h4>${booking.item.title}</h4>
        <p>${isMovie ? 'Movie Ticket' : 'Concert Ticket'}</p>
    `;

    document.getElementById('ticketDetails').innerHTML = `
        <div class="ticket-detail">
            <span class="ticket-label">${isMovie ? 'Theatre' : 'Venue'}</span>
            <span class="ticket-value">${booking.venue.name}</span>
        </div>
        <div class="ticket-detail">
            <span class="ticket-label">Date & Time</span>
            <span class="ticket-value">${booking.date}, ${booking.showtime}</span>
        </div>
        <div class="ticket-detail">
            <span class="ticket-label">Seats</span>
            <span class="ticket-value">${booking.seats.map(seat => seat.id).join(', ')}</span>
        </div>
        <div class="ticket-detail">
            <span class="ticket-label">Total Amount</span>
            <span class="ticket-value">₹${booking.total}</span>
        </div>
    `;

    // Update section state
    if (appState.currentSection === 'ticket') {
        showSection('ticket');
    }
}

function generateQRCode(ticketId) {
    const canvas = document.getElementById('qrCanvas');
    const ctx = canvas.getContext('2d');
    
    // Simple QR code placeholder (basic pattern)
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 100, 100);
    
    ctx.fillStyle = '#fff';
    ctx.font = '8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('QR', 50, 30);
    ctx.fillText(ticketId, 50, 45);
    ctx.fillText('CODE', 50, 60);
    ctx.fillText('SCAN', 50, 75);
}

function selectPaymentMethod(method) {
    appState.paymentMethod = method;
    
    // Update UI
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[onclick="selectPaymentMethod('${method}')"]`).classList.add('selected');
    document.getElementById(method).checked = true;
    
    // Hide all payment forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.add('hidden');
    });
    
    // Show relevant payment form
    if (method === 'card') {
        document.getElementById('cardForm').classList.remove('hidden');
    } else if (method === 'upi') {
        document.getElementById('upiForm').classList.remove('hidden');
    }
    
    document.getElementById('completePaymentBtn').disabled = false;

    // Update payment summary
    if (appState.currentBooking) {
        document.getElementById('paymentSummary').innerHTML = `
            <h3>Payment Summary</h3>
            <div class="ticket-details">
                <div class="ticket-detail">
                    <span class="ticket-label">Event</span>
                    <span class="ticket-value">${appState.currentBooking.item.title}</span>
                </div>
                <div class="ticket-detail">
                    <span class="ticket-label">Seats</span>
                    <span class="ticket-value">${appState.currentBooking.seats.map(s => s.id).join(', ')}</span>
                </div>
                <div class="ticket-detail">
                    <span class="ticket-label">Total Amount</span>
                    <span class="ticket-value">₹${appState.currentBooking.total}</span>
                </div>
            </div>
        `;
    }
}

function processPayment() {
    if (!appState.paymentMethod || !appState.currentBooking) {
        alert('Please select a payment method');
        return;
    }

    // Show loading state
    const btn = document.getElementById('completePaymentBtn');
    btn.textContent = 'Processing...';
    btn.disabled = true;

    setTimeout(() => {
        if (appState.paymentMethod === 'cash') {
            // Cash payment - immediate success
            completeBooking();
        } else {
            // Card/UPI payment simulation
            if (validatePaymentForm()) {
                completeBooking();
            } else {
                btn.textContent = 'Complete Booking';
                btn.disabled = false;
            }
        }
    }, 2000);
}

function validatePaymentForm() {
    if (appState.paymentMethod === 'card') {
        const cardNumber = document.querySelector('#cardForm input[placeholder="Card Number"]').value;
        const expiry = document.querySelector('#cardForm input[placeholder="MM/YY"]').value;
        const cvv = document.querySelector('#cardForm input[placeholder="CVV"]').value;
        const name = document.querySelector('#cardForm input[placeholder="Cardholder Name"]').value;

        if (!cardNumber || !expiry || !cvv || !name) {
            alert('Please fill all card details');
            return false;
        }
    } else if (appState.paymentMethod === 'upi') {
        const upiId = document.querySelector('#upiForm input[placeholder="Enter UPI ID (example@upi)"]').value;
        
        if (!upiId || !upiId.includes('@')) {
            alert('Please enter a valid UPI ID');
            return false;
        }
    }
    
    return true;
}

function completeBooking() {
    // Add booking to history
    appState.bookings.push({...appState.currentBooking, status: 'Confirmed'});
    saveBookings();
    
    // Show success modal
    document.getElementById('successModal').classList.remove('hidden');
    
    // Reset booking state
    resetBookingState();
}

function resetBookingState() {
    appState.selectedItem = null;
    appState.selectedVenue = null;
    appState.selectedShowtime = null;
    appState.selectedSeats = [];
    appState.currentBooking = null;
    appState.paymentMethod = null;
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    showSection('bookings');
    renderBookings();
}

function renderBookings() {
    const bookingsList = document.getElementById('bookingsList');
    
    if (appState.bookings.length === 0) {
        bookingsList.innerHTML = `
            <div class="empty-state">
                <h3>No bookings yet</h3>
                <p>Start by booking your first movie or concert!</p>
            </div>
        `;
        return;
    }
    
    const bookingsHTML = appState.bookings.reverse().map(booking => `
        <div class="booking-card">
            <div class="booking-poster" style="background-image: url('${booking.type === 'movie' ? booking.item.poster : booking.item.image}')"></div>
            <div class="booking-details">
                <h4>${booking.item.title}</h4>
                <div class="booking-meta">${booking.venue.name}, ${capitalizeFirst(booking.city)}</div>
                <div class="booking-meta">${booking.date}, ${booking.showtime}</div>
                <div class="booking-seats">Seats: ${booking.seats.map(seat => seat.id).join(', ')}</div>
                <div class="booking-status status status--success">
                    ${booking.status}
                </div>
            </div>
            <div class="booking-amount">
                <div class="booking-total">₹${booking.total}</div>
                <button class="btn btn--sm btn--outline">Download Ticket</button>
            </div>
        </div>
    `).join('');
    
    bookingsList.innerHTML = bookingsHTML;
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function goBack() {
    if (appState.currentSection === 'venues') {
        if (appState.selectedItem && appState.selectedItem.duration !== undefined) {
            showSection('movies');
        } else {
            showSection('concerts');
        }
    }
}

function saveBookings() {
    // In a real app, this would save to a database
    // For demo purposes, we keep it in memory
    console.log('Bookings saved:', appState.bookings);
}

function loadBookings() {
    // In a real app, this would load from a database
    // For demo purposes, we start with empty bookings
    appState.bookings = [];
}

// Event listeners for sections
document.addEventListener('click', function(e) {
    if (e.target.matches('[onclick*="showSection"]')) {
        const section = e.target.getAttribute('onclick').match(/showSection\('(\w+)'\)/)[1];
        
        if (section === 'ticket' && appState.selectedSeats.length > 0) {
            generateTicket();
        }
        
        if (section === 'payment' && appState.currentBooking) {
            renderTicketPreview();
        }
    }
});

// Initialize seat selection when seats section is shown
document.querySelector('[data-section="seats"]').addEventListener('click', function() {
    if (appState.selectedItem && appState.selectedVenue && !document.getElementById('seatMap').hasChildNodes()) {
        renderSeatMap();
    }
});

// Dark Mode Functions
function initializeTheme() {
    // Check for system preference or stored preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = getStoredTheme();

    if (storedTheme) {
        appState.theme = storedTheme;
    } else if (prefersDark) {
        appState.theme = 'dark';
    } else {
        appState.theme = 'light';
    }

    applyTheme(appState.theme);
    updateThemeToggleIcon();

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getStoredTheme()) {
            appState.theme = e.matches ? 'dark' : 'light';
            applyTheme(appState.theme);
            updateThemeToggleIcon();
        }
    });
}

function toggleDarkMode() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    applyTheme(appState.theme);
    updateThemeToggleIcon();
    storeTheme(appState.theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
}

function updateThemeToggleIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = appState.theme === 'light' ? '🌙' : '☀️';
    }
}

function storeTheme(theme) {
    // Since the app runs in a sandbox without localStorage, 
    // we'll use a fallback method or just keep it in memory
    try {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem('entertainmentHubTheme', theme);
        }
    } catch (e) {
        // Storage not available, theme will reset on page reload
        console.log('Theme storage not available');
    }
}

function getStoredTheme() {
    try {
        if (typeof(Storage) !== "undefined") {
            return sessionStorage.getItem('entertainmentHubTheme');
        }
    } catch (e) {
        // Storage not available
        console.log('Theme storage not available');
    }
    return null;
}