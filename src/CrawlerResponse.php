<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\City;
use App\Models\Country;
use App\Models\State;
use Cache;
use Closure;
use Illuminate\Http\Request;
use App\Models\Page;
use App\Models\Tour;
use App\Models\Post;

class CrawlerResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $ua = strtolower($request->userAgent());

        $bots = [
            // Social
            'facebookexternalhit', 'facebot', 'twitterbot', 'linkedinbot',
            'pinterest', 'slackbot', 'discordbot', 'whatsapp',
            'telegrambot', 'skypeuripreview', 'teamsbot',

            // Search Engines
            'googlebot', 'bingbot', 'duckduckbot',
            'baiduspider', 'yandex', 'sogou',

            // Others
            'applebot', 'embedly', 'quora link preview',
            'outbrain', 'rogerbot', 'ahrefsbot', 'semrushbot'
        ];

        foreach ($bots as $bot) {
            if (strpos($ua, $bot) !== false) {

                // ----- Adjust for /tbadmin/ subfolder -----
                $path = $request->path();
                $prefix = '';
                if (str_starts_with($path, $prefix)) {
                    $path = substr($path, strlen($prefix));
                }

                if ($path === '' || $path === '/') {
                    return response()->view('share.seo', [
                        'title' => 'Limo Royale | Luxury Limo & Airport Chauffeur Service Toronto',
                        'description' => 'Travel like royalty with Limo Royale. Premium fleet, expert chauffeurs, and personalized service for corporate, airport, or special events. Book now!',
                        'keywords' => 'airport chauffeur service, airport limo service',
                        //'image' => asset('public/512x512.jpg'),
                    ]);
                }
                else if ($path === 'about') {
                    return response()->view('share.seo', [
                        'title' => 'About Limo Royale | Luxury Chauffeur & Limo Services',
                        'description' => 'Experience over 20 years of luxury with Limo Royale. Travel with expert chauffeurs, a pristine fleet, and royal service. Book your ride today!',
                        'keywords' => 'airport chauffeur service, airport limo service',
                        // 'image' => asset('public/images/destination.jpg'),
                    ]);
                }
                else if ($path === 'airport-meet-and-greet-services') {
                    return response()->view('share.seo', [
                        'title' => 'Airport Meet & Greet Services Toronto | Limo Royale',
                        'description' => 'Experience seamless airport arrivals with Limo Royale\'s Meet & Greet service. Our professional chauffeurs ensure a smooth transition from gate to ride. Book now!',
                        'keywords' => 'airport chauffeur service, airport limo service',
                        // 'image' => asset('public/images/tickets.jpg'),
                    ]);
                }
                else if ($path === 'irport-transfers') {
                    return response()->view('share.seo', [
                        'title' => 'Airport Limousine & Transportation Service in Toronto | Limo Royale',
                        'description' => 'Book your wedding limo with Limo Royale. Enjoy luxury transportation for your special day in Toronto. Reserve your elegant ride today!',
                        'keywords' => 'Airport Limo Toronto, Airport Limo Service Toronto, Airport Limousine Service Toronto, Limo From Pearson Airport, Pearson Airport Limo Service, Toronto Airport Limousine, Airport Transportation Toronto, Pearson Airport Car Service, Limo to Pearson Airport, Cheap Airport Limo Toronto, Best Airport Limo Toronto, Best Airport Limo Service Toronto',
                        // 'image' => asset('public/images/about-us.jpg'),
                    ]);
                }
                else if ($path === 'areas-served') {
                    return response()->view('share.seo', [
                        'title' => 'Areas We Serve for Airport Limo & Transfers | LimoRoyal',
                        'description' => 'Tailor your perfect journey with Limo Royale. Book luxury custom tours across Niagara, Toronto, Montreal & more with expert chauffeurs today!',
                        'keywords' => 'Airport Limo Service, Custom Tours & Luxury Travel Experiences',
                        // 'image' => asset('public/images/contact-us.jpg'),
                    ]);
                }
                else if ($path === 'birthdays-bachelor-and-bachelorette-limo-service') {
                    return response()->view('share.seo', [
                        'title' => 'Celebrate in Style: Birthday & Party Limo Service | Limo Royale',
                        'description' => 'Keep track of your favourite tours, attractions, and tickets with your TourBeez Wishlist. Easily revisit your favourites, compare options, and book when you\'re ready',
                        'keywords' => 'wishlist tours, saved tours, favourite tickets, tour wish list, save tour deals',
                        // 'image' => asset('public/images/wishlist.jpg'),
                    ]);
                }
                else if ($path === 'bus-charter') {
                    return response()->view('share.seo', [
                        'title' => 'Luxury Bus Charter & Group Travel | Limo Royale',
                        'description' => 'Travel in style with Limo Royale’s luxury bus charters. Corporate, private, or sports groups enjoy spacious fleet, expert chauffeurs, and seamless rides.',
                        'keywords' => 'Bus Charter Service Toronto, Luxury Bus Charter & Group Travel',
                        // 'image' => asset('public/images/terms-condition.jpg'),
                    ]);
                }
                else if ($path === 'casino-limo-service') {
                    return response()->view('share.seo', [
                        'title' => 'Casino Limo Service Toronto, VIP Casino Transportation | Limo Royale',
                        'description' => 'Arrive in style—top-tier limo service to airport and casino experiences. Luxury on demand with airport limo service near me convenience.',
                        'keywords' => 'limo service to airport near me, airport limo service near me',
                        // 'image' => asset('public/images/privacy-policy.jpg'),
                    ]);
                }
                else if ($path === 'contact') {
                    return response()->view('share.seo', [
                        'title' => 'Contact Limo Royale | Book Your Luxury Chauffeur Service Today',
                        'description' => 'Get in touch with Limo Royale to reserve your premium limo or airport chauffeur service. Experience comfort and elegance with our expert chauffeurs.',
                        'keywords' => 'Book Your Luxury Chauffeur Service Today, Best Airport Limo Service Toronto, Airport Transportation Toronto',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'corporate-limo-service') {
                    return response()->view('share.seo', [
                        'title' => 'Corporate Limo & Airport Shuttle Service Toronto | Limo Royale',
                        'description' => 'Book professional corporate limo, airport shuttle, and Toronto shuttle services with Limo Royale. Ensure comfort, reliability, and style—reserve now!',
                        'keywords' => 'Corporate Limo Service, Corporate Limo Service in Toronto, Airport Shuttle Toronto, Toronto Shuttle Service',
                        // 'image' => asset('public/images/login-banner.jpg'),
                    ]);
                }
                else if ($path === 'contact') {
                    return response()->view('share.seo', [
                        'title' => 'Contact Limo Royale | Book Your Luxury Chauffeur Service Today',
                        'description' => 'Get in touch with Limo Royale to reserve your premium limo or airport chauffeur service. Experience comfort and elegance with our expert chauffeurs.',
                        'keywords' => 'Book Your Luxury Chauffeur Service Today, Best Airport Limo Service Toronto, Airport Transportation Toronto',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'luxury-chauffeuring-services-to-londons') {
                    return response()->view('share.seo', [
                        'title' => 'Luxury Group Chauffeuring & Event Transportation | Limo Royale',
                        'description' => 'Book Limo Royale for luxury group and event transportation. Corporate, weddings, VIPs, and social events—travel in style and comfort. Reserve now!',
                        'keywords' => 'Group Transportation Service in Toronto',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'executive-car-hire') {
                    return response()->view('share.seo', [
                        'title' => 'Executive Car Hire & Chauffeur Services in Toronto | Limo Royale',
                        'description' => 'Book premium executive car hire, luxury sedans, SUVs, and professional chauffeur services in Toronto. Ideal for corporate events, airport transfers & more.',
                        'keywords' => 'Executive Car Hire, Executive Car Hire Service Toronto',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'fleet') {
                    return response()->view('share.seo', [
                        'title' => 'Limo Royale Fleet | Premium Luxury Vehicles for Every Occasion',
                        'description' => 'Travel in style with Limo Royale’s luxury fleet of sedans, SUVs, and limousines. Book your premium, comfortable, and unforgettable journey today.',
                        'keywords' => 'Fleet of Luxury Airport Limos, Premium Luxury Vehicles for Every Occasion',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'ladies-night-out-limo-service') {
                    return response()->view('share.seo', [
                        'title' => 'Ladies Night Out Limo Service in Toronto | Limo Royale',
                        'description' => 'Celebrate your night out in style with Limo Royale’s luxury limo service in Toronto. Perfect for groups—book your fun and safe ride today!',
                        'keywords' => 'Ladies Night Out Limo Service in Toronto',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'login') {
                    return response()->view('share.seo', [
                        'title' => 'Login to Limo Royale | Account & Order Management',
                        'description' => 'Access your Limo Royale account to manage orders, view purchase history, and personalize your shopping experience with secure login.',
                        'keywords' => 'Airport Limo Service Toronto, Pearson Airport Limo Service',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'long-distance-limo-service') {
                    return response()->view('share.seo', [
                        'title' => 'Long Distance Limo Service in Toronto | Travel with Comfort',
                        'description' => 'Book affordable long-distance limo services Toronto that ensure a smooth and luxurious ride. Comfort, reliability, and style for all your travel needs. Reserve now!',
                        'keywords' => 'Long-Distance Limo services Toronto',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'luxury-chauffeuring-services-to-londons') {
                    return response()->view('share.seo', [
                        'title' => 'Toronto Airport Chauffeur & Luxury Chauffeuring | Limo Royale',
                        'description' => 'Experience premium luxury chauffeuring in Toronto with Limo Royale. Airport transfers, corporate rides & special occasions—book your chauffeur today!',
                        'keywords' => 'Toronto Airport Chauffeur, Luxury Chauffeuring Services',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'luxury-limousine') {
                    return response()->view('share.seo', [
                        'title' => 'Luxury Limousine Services for Every Occasion | Limo Royale',
                        'description' => 'Book a premium limousine with Limo Royale. Experience comfort and elegance for any occasion. Reserve your ride today!',
                        'keywords' => 'Luxury Limousine Services for Every Occasion',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'online-reservations') {
                    return response()->view('share.seo', [
                        'title' => 'Book Your Ride Online | Limo Royale Luxury Chauffeur Service',
                        'description' => 'Reserve your luxury limo or private tour with Limo Royale. Easy online booking for airport transfers, city tours, and more.',
                        'keywords' => 'Limo Royale Luxury Chauffeur Service, Cheap Airport Limo',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'promotions') {
                    return response()->view('share.seo', [
                        'title' => 'Limo Royale Promotions | Luxury Limo & Airport Chauffeur Deals',
                        'description' => 'Explore exclusive promotions on luxury limo and airport chauffeur services at Limo Royale. Book now to enjoy premium rides at unbeatable prices.',
                        'keywords' => 'Limo Royale Promotions, Luxury Limo & Airport Chauffeur Deals',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }
                else if ($path === 'wedding-cars') {
                    return response()->view('share.seo', [
                        'title' => 'Wedding Limo & Chauffeur Services Toronto | Limo Royale',
                        'description' => 'Elegant wedding cars and airport limo service to make your big day perfect—reliable transport for your special moments.',
                        'keywords' => 'airport limo service, airport limo',
                        // 'image' => asset('public/images/cancel-policy.jpg'),
                    ]);
                }                             
            }
        }

        return $next($request);
    }

    
}
