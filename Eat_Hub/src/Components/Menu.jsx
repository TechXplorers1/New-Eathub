import React, { useState } from 'react';
import {
    BoltIcon,
    TruckIcon,
    BuildingStorefrontIcon,
    AcademicCapIcon, 
    Squares2X2Icon, 
    FireIcon,
    HeartIcon,
    GlobeAltIcon,
    InboxStackIcon,
    CakeIcon,
    FireIcon as LeafPlaceholderIcon, 
    SparklesIcon,
    GiftIcon,
    BuildingOfficeIcon,
    TagIcon,
    StarIcon,
    CurrencyDollarIcon,
    CheckCircleIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';

const PRIMARY_COLOR = '#ff6b1d'; // Consistent orange color (Active/Selected)
const HOVER_GREEN = '#008080'; // Dark green color (Hover State)

const Menu = () => {
    // State for managing the filter modes (only one can be active at a time: All/Delivery/Pickup)
    const [activeMode, setActiveMode] = useState('all');
    
    // State for managing the toggle filters (now mutually exclusive)
    const [toggleFilters, setToggleFilters] = useState({
        deals: false,
        rating: false,
        price: false,
        eatHub: false,
    });

    const categories = [
        { name: 'Breakfast', icon: <BoltIcon /> },
        { name: 'Fast Food', icon: <TruckIcon /> },
        { name: 'Burgers', icon: <BuildingStorefrontIcon /> },
        { name: 'Coffee', icon: <AcademicCapIcon /> }, 
        { name: 'Pizza', icon: <Squares2X2Icon /> }, 
        { name: 'Halal', icon: <FireIcon /> },
        { name: 'Chicken', icon: <HeartIcon /> },
        { name: 'Bubble Tea', icon: <GlobeAltIcon /> },
        { name: 'Indian', icon: <InboxStackIcon /> },
        { name: 'Desserts', icon: <CakeIcon /> }, 
        { name: 'Mexican', icon: <LeafPlaceholderIcon /> }, 
        { name: 'Greek', icon: <SparklesIcon /> },
        { name: 'Hot Dogs', icon: <GiftIcon /> },
        { name: 'Sandwiches', icon: <BuildingOfficeIcon /> },
        { name: 'Noodles', icon: <InboxStackIcon /> },
        { name: 'Sushi', icon: <HeartIcon /> },
    ];

    // Combine all filters into one array for unified rendering
    const allFilters = [
        // Mode Filters (only one active at a time)
        { id: 'all', label: 'All', type: 'mode' },
        { id: 'delivery', label: 'Delivery', type: 'mode' },
        { id: 'pickup', label: 'Pickup', type: 'mode' },
        
        // Toggle Filters (mutually exclusive)
        { id: 'deals', label: 'Deals', icon: <TagIcon />, type: 'toggle' },
        { id: 'rating', label: 'Over 4.5', icon: <StarIcon />, hasDropdown: true, type: 'toggle' },
        { id: 'price', label: 'Price', icon: <CurrencyDollarIcon />, hasDropdown: true, type: 'toggle' },
        { id: 'eatHub', label: 'Eat Hub', icon: <CheckCircleIcon />, type: 'toggle' },
    ];

    const handleFilterClick = (filterId, filterType) => {
        if (filterType === 'mode') {
            // Mode filters (All/Delivery/Pickup) remain mutually exclusive
            setActiveMode(filterId);
        } else if (filterType === 'toggle') {
            // Toggle filters (Deals, Rating, Price, Eat Hub) are now mutually exclusive
            const isCurrentlyActive = toggleFilters[filterId];
            
            let newToggleState;

            if (isCurrentlyActive) {
                // If the filter is already active, clicking it turns all off (deselection)
                newToggleState = {
                    deals: false,
                    rating: false,
                    price: false,
                    eatHub: false,
                };
            } else {
                // If inactive, click turns it on and turns all others off
                newToggleState = {
                    deals: false,
                    rating: false,
                    price: false,
                    eatHub: false,
                    [filterId]: true, // Set the clicked one to true
                };
            }

            setToggleFilters(newToggleState);
        }
        console.log(`Filter clicked: ${filterId} (${filterType})`);
    };

    return (
        <>
            <style>{`
                /* Global Container and Font */
                .menu-page-container {
                    padding: 20px 0;
                    font-family: 'Inter', sans-serif;
                    width: 100%;
                    box-sizing: border-box;
                    max-width: 100%;
                }
                
                .content-section {
                    padding: 0 20px;
                }

                /* --- Category Scroller (No change requested here, but ensuring styles are good) --- */
                .category-scroller-wrapper {
                    margin-bottom: 25px;
                    padding: 0 20px;
                }

                .category-scroller {
                    display: flex;
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    scroll-behavior: smooth;
                    padding: 10px 0;
                    scrollbar-width: none;
                }

                .category-scroller::-webkit-scrollbar {
                    display: none;
                }

                .category-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    flex-shrink: 0;
                    margin: 0 12px;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                    width: 60px; 
                    user-select: none;
                }

                .category-item:first-child {
                    margin-left: 0;
                }
                
                .category-item:hover {
                    transform: scale(1.05);
                }

                .category-icon {
                    width: 50px; 
                    height: 50px;
                    border-radius: 50%;
                    background-color: #f7f7f7; 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 8px;
                    box-shadow: none; 
                    border: 1px solid #f0f0f0; 
                    transition: all 0.3s ease;
                }
                
                .category-icon svg {
                    width: 24px; 
                    height: 24px;
                    color: #222; 
                    stroke-width: 1.8; 
                    transition: color 0.3s ease;
                }

                .category-item:hover .category-icon svg {
                    color: ${PRIMARY_COLOR};
                }

                .category-name {
                    font-size: 0.85rem;
                    color: #555;
                    text-align: center;
                    white-space: nowrap;
                    font-weight: 500;
                    transition: color 0.3s ease, font-weight 0.3s ease;
                }
                
                .category-item:hover .category-name {
                    color: ${PRIMARY_COLOR}; 
                    font-weight: 700;
                }


                /* --- Unified Filter Bar Styles --- */
                .unified-filter-bar {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px; 
                    align-items: center;
                    padding: 0 20px 20px 20px;
                    margin-bottom: 20px; 
                }

                .filter-button {
                    display: flex;
                    align-items: center;
                    padding: 8px 15px; 
                    border: 1px solid #e0e0e0;
                    border-radius: 20px; 
                    background-color: #fff;
                    color: #333;
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap; 
                    user-select: none;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05); 
                }
                
                /* 1. HOVER STATE: Dark Green (#008080) for all buttons (overrides active color) */
                .filter-button:hover {
                    background-color: ${HOVER_GREEN} !important;
                    border-color: ${HOVER_GREEN} !important;
                    color: white !important;
                    box-shadow: 0 2px 5px rgba(0, 128, 128, 0.3) !important;
                }

                /* 2. ACTIVE/SELECTED STATE: Orange (PRIMARY_COLOR) */
                .filter-active {
                    background-color: ${PRIMARY_COLOR}; 
                    color: white;
                    border-color: ${PRIMARY_COLOR};
                    box-shadow: 0 4px 10px rgba(255, 107, 29, 0.3);
                }
                
                /* 3. ICON STYLING: Increased size and bold/thicker lines */
                .filter-button > svg {
                    margin-right: 6px;
                    width: 1.4rem; /* Increased size */
                    height: 1.4rem; /* Increased size */
                    color: #333;
                    stroke-width: 2.5; /* Increased stroke for bolder appearance */
                    transition: color 0.2s ease, stroke-width 0.2s ease;
                }
                
                /* Icon color for Active state */
                .filter-active svg {
                    color: white;
                }

                /* Icon and Arrow color for the Dark Green Hover state */
                .filter-button:hover svg,
                .filter-button:hover .dropdown-arrow {
                    color: white !important;
                }


                /* Dropdown Arrow Styling */
                .dropdown-arrow {
                    margin-left: 8px;
                    width: 1.2rem; /* Adjusted for new icon size */
                    height: 1.2rem; /* Adjusted for new icon size */
                    color: #333; 
                    transition: color 0.2s ease;
                }
                
                .filter-active .dropdown-arrow {
                    color: white;
                }


                /* --- Responsive Adjustments --- */
                @media (max-width: 768px) {
                    .menu-page-container {
                        padding: 10px 0; 
                    }
                    
                    .category-scroller-wrapper,
                    .unified-filter-bar {
                        padding: 0 15px;
                    }

                    .category-item {
                        width: 55px;
                        margin: 0 6px; 
                    }

                    .category-icon {
                        width: 45px;
                        height: 45px;
                    }
                    
                    .filter-button {
                        padding: 6px 10px;
                        font-size: 0.8rem;
                    }
                    
                    /* Responsive Filter Icon Adjustment */
                    .filter-button > svg {
                        margin-right: 4px;
                        width: 1.2rem; 
                        height: 1.2rem;
                        stroke-width: 2.2;
                    }
                }
            `}</style>
            <div className="menu-page-container">
                {/* Category Scroller */}
                <div className="category-scroller-wrapper">
                    <div className="category-scroller">
                        {categories.map((category, index) => (
                            <div key={index} className="category-item" onClick={() => console.log(`Selected ${category.name}`)}>
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <span className="category-name">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Unified Filter Bar (All filters merged) */}
                <div className="unified-filter-bar">
                    {allFilters.map((filter) => {
                        // Determine if the filter is active
                        const isActive = 
                            filter.type === 'mode' 
                                ? activeMode === filter.id 
                                : toggleFilters[filter.id];

                        // Determine the click handler
                        const clickHandler = () => handleFilterClick(filter.id, filter.type);

                        return (
                            <div 
                                key={filter.id} 
                                className={`filter-button ${isActive ? 'filter-active' : ''}`}
                                onClick={clickHandler}
                            >
                                {/* Only render icon for toggle filters */}
                                {filter.icon && filter.icon} 
                                <span>{filter.label}</span>
                                {/* Use ChevronDownIcon for dropdown indicator */}
                                {filter.hasDropdown && <ChevronDownIcon className="dropdown-arrow" />} 
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </>
    );
};

export default Menu;
