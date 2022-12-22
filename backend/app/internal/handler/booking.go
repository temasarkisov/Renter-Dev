package handler

import (
	"net/http"
	"renter/backend/app/internal/model"
	"strconv"

	"github.com/gin-gonic/gin"
)

type getAllBookingsResponse struct {
	Data []model.Booking `json:"data"`
}

// getBookings godoc
// @Summary Get bookings info
// @Tags booking
// @Accept  json
// @Produce  json
// @Success 200 {object} getAllBookingsResponse
// @Failure 400 {object} errorResponse
// @Failure 500 {object} errorResponse
// @Param Authorization header string true "Authorization"
// @Router /booking/ [get]
func (h *Handler) getBookings(ctx *gin.Context) {
	bookings, err := h.services.Booking.GetBookings()
	if err != nil {
		newErrorResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	ctx.JSON(http.StatusOK, getAllBookingsResponse{
		Data: bookings,
	})
}

// createBooking godoc
// @Summary Create booking info
// @Tags booking
// @Accept  json
// @Produce  json
// @Success 200 {object} responseWithId
// @Failure 400 {object} errorResponse
// @Failure 500 {object} errorResponse
// @Param Authorization header string true "Authorization"
// @Param request body model.Booking true "Booking's user id, listing id and date"
// @Router /booking/ [post]
func (h *Handler) createBooking(ctx *gin.Context) {
	var input model.Booking

	if err := ctx.BindJSON(&input); err != nil {
		newErrorResponse(ctx, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.Booking.CreateBooking(input)
	if err != nil {
		newErrorResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	ctx.JSON(http.StatusOK, responseWithId{id})
}

// updateBooking godoc
// @Summary Update booking info
// @Tags booking
// @Accept  json
// @Produce  json
// @Success 200 {object} responseWithId
// @Failure 400 {object} errorResponse
// @Failure 500 {object} errorResponse
// @Param Authorization header string true "Authorization"
// @Param id path int true "booking id"
// @Router /booking/{id} [patch]
func (h *Handler) updateBooking(ctx *gin.Context) {
	var input model.Booking

	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		newErrorResponse(ctx, http.StatusBadRequest, "invalid id param")
		return
	}

	if err := ctx.BindJSON(&input); err != nil {
		newErrorResponse(ctx, http.StatusBadRequest, err.Error())
		return
	}
	input.ID = id

	bookingId, err := h.services.Booking.UpdateBooking(input)
	if err != nil {
		newErrorResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	ctx.JSON(http.StatusOK, responseWithId{bookingId})
}

// deleteBooking godoc
// @Summary Delete booking info
// @Tags booking
// @Accept  json
// @Produce  json
// @Success 200 {object} responseWithId
// @Failure 400 {object} errorResponse
// @Failure 500 {object} errorResponse
// @Param Authorization header string true "Authorization"
// @Param id path int true "booking id"
// @Router /booking/{id} [delete]
func (h *Handler) deleteBooking(ctx *gin.Context) {
	id, err := strconv.Atoi(ctx.Param("id"))
	if err != nil {
		newErrorResponse(ctx, http.StatusBadRequest, "invalid id param")
		return
	}

	bookingId, err := h.services.Booking.DeleteBooking(id)
	if err != nil {
		newErrorResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	ctx.JSON(http.StatusOK, responseWithId{bookingId})
}
