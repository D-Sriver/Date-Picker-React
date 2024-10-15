import React, { useEffect, useRef, useState } from 'react';
import './DatePicker.css';

interface DatePickerProps {
	onChange: (date: Date) => void;
	initialDate?: Date;
	name: string; // name of the input
	locale?: string; // locale of the datepicker
	//---
	colorPrimary?: string; // primary color of the datepicker
	colorSecondary?: string; // secondary color of the datepicker
	colorTertiary?: string; // tertiary color of the datepicker
	// ---
	colorBackgroundField?: string; // background color of the datepicker
	colorBackgroundSelect?: string; // background color of the datepicker
	blurBackground?: number; // amount of blur for the background of the datepicker
	colorBorderField?: string; // border color of the datepicker
	colorTextField?: string; // text color of the datepicker
	placeholder?: string; // placeholder of the datepicker
	placeholderColor?: string; // placeholder color of the datepicker
	// ---
	colorIcon?: string; // icon color of the datepicker
	yearRangeStart?: number; // start year of the datepicker
	yearRangeEnd?: number; // end year of the datepicker
}

const DatePicker: React.FC<DatePickerProps> = ({
	onChange,
	initialDate,
	name,
	locale = 'en-US',
	colorPrimary = '#4caf50',
	colorSecondary = '#ffffff',
	colorTertiary = '#333333',
	colorBackgroundField = '#ffffff',
	blurBackground = 2,
	colorBackgroundSelect = 'rgba(0, 0, 0, 0.2)',
	colorBorderField = '#d1d5db',
	colorTextField = '#333333',
	placeholder = 'Select a date',
	placeholderColor = '#333333',
	colorIcon = '#333333',
	yearRangeStart = 100,
	yearRangeEnd = 10,
}) => {
	const [currentDate, setCurrentDate] = useState(initialDate || new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(
		initialDate || null
	);
	const [isOpen, setIsOpen] = useState(false);
	const datePickerRef = useRef<HTMLDivElement>(null);

	const [isMonthOpen, setIsMonthOpen] = useState(false);
	const [isYearOpen, setIsYearOpen] = useState(false);

	const yearListRef = useRef<HTMLDivElement>(null);
	const monthListRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isYearOpen && yearListRef.current) {
			const selectedYearElement =
				yearListRef.current.querySelector('.selected');
			if (selectedYearElement) {
				selectedYearElement.scrollIntoView({
					block: 'center',
					behavior: 'auto',
				});
			}
		}
	}, [isYearOpen]);

	useEffect(() => {
		if (isMonthOpen && monthListRef.current) {
			const selectedMonthElement =
				monthListRef.current.querySelector('.selected');
			if (selectedMonthElement) {
				selectedMonthElement.scrollIntoView({
					block: 'center',
					behavior: 'auto',
				});
			}
		}
	}, [isMonthOpen]);

	const toggleMonthDropdown = () => {
		setIsMonthOpen(!isMonthOpen);
		if (!isMonthOpen) {
			setTimeout(() => {
				if (monthListRef.current) {
					const selectedMonthElement =
						monthListRef.current.querySelector('.selected');
					if (selectedMonthElement) {
						selectedMonthElement.scrollIntoView({
							block: 'center',
							behavior: 'auto',
						});
					}
				}
			}, 0);
		}
	};

	const toggleYearDropdown = () => {
		setIsYearOpen(!isYearOpen);
		if (!isYearOpen) {
			setTimeout(() => {
				if (yearListRef.current) {
					const selectedYearElement =
						yearListRef.current.querySelector('.selected');
					if (selectedYearElement) {
						selectedYearElement.scrollIntoView({
							block: 'center',
							behavior: 'auto',
						});
					}
				}
			}, 0);
		}
	};

	const handleMonthSelect = (month: number) => {
		setCurrentDate(new Date(currentDate.getFullYear(), month, 1));
		setIsMonthOpen(false);
	};

	const handleYearSelect = (year: number) => {
		setCurrentDate(new Date(year, currentDate.getMonth(), 1));
		setIsYearOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				datePickerRef.current &&
				!datePickerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const daysInMonth = (year: number, month: number) => {
		return new Date(year, month + 1, 0).getDate();
	};

	const renderCalendar = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const firstDay = new Date(year, month, 1).getDay();
		const totalDays = daysInMonth(year, month);

		const days: React.ReactNode[] = [];

		for (let i = 0; i < firstDay; i++) {
			days.push(<div key={`empty-${i}`} className="empty-day"></div>);
		}
		for (let i = 1; i <= totalDays; i++) {
			days.push(
				<div
					key={i}
					className={`day ${selectedDate?.getDate() === i ? 'selected' : ''}`}
					onClick={(e) => handleDateClick(i, e)}
				>
					{i}
				</div>
			);
		}

		return days;
	};

	const handleDateClick = (day: number, e: React.MouseEvent) => {
		e.stopPropagation();
		const newDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		);
		setSelectedDate(newDate);
		onChange(newDate);
		setIsOpen(false);
	};

	const monthOptions = Array.from({ length: 12 }, (_, i) => (
		<option key={i} value={i}>
			{new Date(2000, i, 1).toLocaleString(locale, { month: 'long' })}
		</option>
	));

	const generateYearOptions = () => {
		const currentYear = new Date().getFullYear();
		const startYear = currentYear - yearRangeStart;
		const endYear = currentYear + yearRangeEnd;

		return Array.from({ length: endYear - startYear + 1 }, (_, index) => {
			const year = startYear + index;
			return (
				<option key={year} value={year}>
					{year}
				</option>
			);
		});
	};

	const toggleDatePicker = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	const formatDate = (date: Date | null) => {
		if (!date) return '';
		return date.toLocaleDateString(locale);
	};

	const handleCalendarClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const goToToday = (e: React.MouseEvent) => {
		e.stopPropagation();
		const today = new Date();
		setCurrentDate(today);
		setSelectedDate(today);
		onChange(today);
	};

	useEffect(() => {
		if (datePickerRef.current) {
			datePickerRef.current.style.setProperty(
				'--color-background-select',
				colorBackgroundSelect
			);
			datePickerRef.current.style.setProperty(
				'--blur-background',
				blurBackground.toString() + 'px'
			);
			datePickerRef.current.style.setProperty(
				'--color-text-field',
				colorTextField
			);
			datePickerRef.current.style.setProperty(
				'--color-background-field',
				colorBackgroundField
			);
			datePickerRef.current.style.setProperty(
				'--color-placeholder',
				placeholderColor
			);
			datePickerRef.current.style.setProperty(
				'--color-border-field',
				colorBorderField
			);
			datePickerRef.current.style.setProperty('--color-primary', colorPrimary);
			datePickerRef.current.style.setProperty(
				'--color-secondary',
				colorSecondary
			);
			datePickerRef.current.style.setProperty(
				'--color-tertiary',
				colorTertiary
			);
			datePickerRef.current.style.setProperty('--color-icon', colorIcon);
		}
	}, [
		colorPrimary,
		colorSecondary,
		colorTertiary,
		colorBackgroundField,
		colorTextField,
		colorBorderField,
		colorBackgroundSelect,
		blurBackground,
		colorIcon,
		placeholderColor,
	]);

	return (
		<div className="date-picker-container" ref={datePickerRef}>
			<div className="date-input" onClick={toggleDatePicker}>
				<input
					type="text"
					id={name}
					name={name}
					value={formatDate(selectedDate)}
					readOnly
					placeholder={placeholder}
					className="date-input-field"
				/>
				<span className="calendar-icon"></span>
			</div>
			{isOpen && (
				<div className="date-picker" onClick={handleCalendarClick}>
					<div className="header">
						<button
							className="today-button"
							onClick={goToToday}
							title="Aller à aujourd'hui"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>
						</button>
						<div
							className={`custom-select-container ${isMonthOpen ? 'open' : ''}`}
						>
							<div className="custom-select" onClick={toggleMonthDropdown}>
								<span>
									{currentDate.toLocaleString(locale, { month: 'long' })}
								</span>
								<span className="dropdown-arrow">▼</span>
							</div>
							<div className="custom-select-options" ref={monthListRef}>
								{monthOptions.map((option, index) => (
									<div
										key={index}
										className={`custom-select-option ${
											currentDate.getMonth() === index ? 'selected' : ''
										}`}
										onClick={() => handleMonthSelect(index)}
									>
										{option.props.children}
									</div>
								))}
							</div>
						</div>
						<div
							className={`custom-select-container ${isYearOpen ? 'open' : ''}`}
						>
							<div className="custom-select" onClick={toggleYearDropdown}>
								<span>{currentDate.getFullYear()}</span>
								<span className="dropdown-arrow">▼</span>
							</div>
							<div className="custom-select-options" ref={yearListRef}>
								{generateYearOptions().map((option) => (
									<div
										key={option.props.value}
										className={`custom-select-option ${
											currentDate.getFullYear() === option.props.value
												? 'selected'
												: ''
										}`}
										onClick={() => handleYearSelect(option.props.value)}
									>
										{option.props.children}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="calendar">
						<div className="weekdays">
							{locale === 'fr-FR'
								? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(
										(day) => (
											<div key={day} className="weekday">
												{day}
											</div>
										)
								  )
								: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
										(day) => (
											<div key={day} className="weekday">
												{new Date(
													2024,
													0,
													day === 'Sun'
														? 7
														: [
																'Mon',
																'Tue',
																'Wed',
																'Thu',
																'Fri',
																'Sat',
														  ].indexOf(day) + 1
												).toLocaleString(locale, { weekday: 'short' })}
											</div>
										)
								  )}
						</div>
						<div className="days">{renderCalendar()}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DatePicker;
