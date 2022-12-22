package handler

import (
	"net/http"
	"renter/backend/app/internal/service"

	_ "renter/backend/app/docs"

	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

type Handler struct {
	services *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{service}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	auth := router.Group("api/v1/auth")
	{
		auth.POST("sign-up", h.signUp)
		auth.POST("sign-in", h.signIn)
	}

	api := router.Group("api/v1/")
	{
		user := api.Group("users", h.userIdentity)
		{
			user.GET("/:id", h.getUserById)
			user.PUT("/:id", h.updateUser)
			user.DELETE("/:id", h.deleteUser)
		}
		users := api.Group("users", h.userIdentity)
		{
			users.GET("/", h.getAllUsers)
		}

		listing := api.Group("listing", h.userIdentity)
		{
			listing.PATCH("/:id", h.updateListing)
			listing.DELETE("/:id", h.deleteListing)
			listing.POST("/", h.createListing)
		}
		listings := api.Group("listing", h.userIdentity)
		{
			listings.GET("/", h.getListings)
		}

		listingDetailed := api.Group("listing_detailed", h.userIdentity)
		{
			listingDetailed.POST("/", h.createListingDetailed)
			listingDetailed.PATCH("/:id", h.updateListingDetailed)
			listingDetailed.DELETE("/:id", h.deleteListingDetailed)
		}
		listingsDetailed := api.Group("listings_detailed", h.userIdentity)
		{
			listingsDetailed.GET("/", h.getListingsDetailed)
		}

		listingImage := api.Group("listing_image", h.userIdentity)
		{
			listingImage.POST("/", h.createListingImage)
			listingImage.PATCH("/:id", h.updateListingImage)
			listingImage.DELETE("/:id", h.deleteListingImage)
		}
		listingImages := api.Group("listings_images", h.userIdentity)
		{
			listingImages.GET("/", h.getListingImages)
		}

		calendar := api.Group("calendar", h.userIdentity)
		{
			calendar.POST("/", h.createCalendarInfo)
			calendar.PATCH("/:id", h.updateCalendarInfo)
			calendar.DELETE("/:id", h.deleteCalendarInfo)
		}
		calendars := api.Group("calendars", h.userIdentity)
		{
			calendars.GET("/", h.getAllCalendarInfo)
		}

		booking := api.Group("booking", h.userIdentity)
		{
			booking.POST("/", h.createBooking)
			booking.PATCH("/:id", h.updateBooking)
			booking.DELETE("/:id", h.deleteBooking)
		}
		bookings := api.Group("bookings", h.userIdentity)
		{
			bookings.GET("/", h.getBookings)
		}

		api.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
		api.GET("/", func(ctx *gin.Context) {
			ctx.Redirect(http.StatusFound, "swagger/index.html")
		})
	}

	return router
}
