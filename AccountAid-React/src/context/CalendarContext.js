import React, { createContext, useContext, useEffect, useState } from 'react'
import getCurrentDate from '../components/MakePayments/getCurrentDate'
import { dayNames, monthNames, yearRange } from '../data/calendarData'

const CalendarContext = createContext()

export function useCalendar() {
    return useContext(CalendarContext)
}

export function CalendarProvider({ children }) {
    const { day, month, year } = getCurrentDate()
    const [calendar, setCalendar] = useState({
        months: monthNames,
        days: dayNames,
        years: yearRange(year),
        startMonday: false, // if week starts on a monday
        currentDay: day, 
        currentMonth: month,
        currentYear: year,
        selectedDay: day,
        selectedMonth: month,
        selectedYear: year,
        payments: []
    })

    useEffect(() => {
        updateCurrentDate() // set the current date on page load
    }, [])

    const updatePayments = (payment) => {
        console.log('PAYMENT DATA: ',payment)
        setCalendar((prev) => {
            const updated = {
                ...prev,
                payments: [ ...prev.payments, { year: payment.year, month: payment.month, day: payment.day, dayOfWeek: payment.dayOfWeek, category: payment.category, amount: payment.amount }],
            }
            console.log('PAYMENT: ',updated)
            return updated
        })
        
    }

    const updateYearSelected = (year) => {
        setCalendar((prev) => {
            const updated = {
                ...prev,
                selectedYear: year,
            }
            return updated
        })
    }
    const updateMonthSelected = (month) => {

        setCalendar((prev) => {
            const updated = {
                ...prev,
                selectedMonth: month,
            }
            return updated
        })
    }
    const updateDaySelected = (day) => {
        setCalendar((prev) => {
            const updated = {
                ...prev,
                selectedDay: day,
            }
            return updated
        })
    }

    const updateCurrentDate = () => {
        const today = new Date()
        setCalendar((prev) => {
            const updated = {
                ...prev,
                currentDay: today.getDate(),
                currentMonth: today.getMonth(),
                currentYear: today.getFullYear(),
            }
            return updated
        })
    }
    
    const defaultCalendar = {
        calendar,
        setCalendar,
        updateYearSelected,
        updateMonthSelected,
        updateDaySelected,
        updatePayments,
    }
    return (
        <CalendarContext.Provider value={defaultCalendar}>
            { children }
        </CalendarContext.Provider>
    )
}