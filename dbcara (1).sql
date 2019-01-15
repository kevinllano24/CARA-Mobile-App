-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2018 at 04:09 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcara`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountinfo`
--

CREATE TABLE `accountinfo` (
  `accountid` int(10) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `contactno` int(15) NOT NULL,
  `vehicleplateno` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accountinfo`
--

INSERT INTO `accountinfo` (`accountid`, `fullname`, `email`, `address`, `gender`, `contactno`, `vehicleplateno`) VALUES
(1, 'june love', 'gub', 'huhga', 'Male', 2147483647, '9000');

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `accountid` int(10) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `accounttype` enum('admin','user') NOT NULL DEFAULT 'user',
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`accountid`, `username`, `password`, `accounttype`, `date_created`) VALUES
(1, 'june', 'love', 'user', '2018-10-28 14:00:21');

-- --------------------------------------------------------

--
-- Table structure for table `carnappedreports`
--

CREATE TABLE `carnappedreports` (
  `reportID` int(10) NOT NULL,
  `accountID` int(10) NOT NULL,
  `plateno` varchar(15) NOT NULL,
  `model` varchar(50) NOT NULL,
  `color` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `carnappedreports`
--

INSERT INTO `carnappedreports` (`reportID`, `accountID`, `plateno`, `model`, `color`, `type`) VALUES
(1, 1, '9000', 'mitshobish', 'pink', 'rela');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountinfo`
--
ALTER TABLE `accountinfo`
  ADD PRIMARY KEY (`accountid`),
  ADD UNIQUE KEY `vehicleplateno` (`vehicleplateno`);

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD KEY `accountid` (`accountid`);

--
-- Indexes for table `carnappedreports`
--
ALTER TABLE `carnappedreports`
  ADD PRIMARY KEY (`reportID`),
  ADD KEY `accountID` (`accountID`),
  ADD KEY `plateno` (`plateno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountinfo`
--
ALTER TABLE `accountinfo`
  MODIFY `accountid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `accountid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `carnappedreports`
--
ALTER TABLE `carnappedreports`
  MODIFY `reportID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`accountid`) REFERENCES `accountinfo` (`accountid`) ON UPDATE CASCADE;

--
-- Constraints for table `carnappedreports`
--
ALTER TABLE `carnappedreports`
  ADD CONSTRAINT `carnappedreports_ibfk_1` FOREIGN KEY (`plateno`) REFERENCES `accountinfo` (`vehicleplateno`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carnappedreports_ibfk_2` FOREIGN KEY (`accountID`) REFERENCES `accountinfo` (`accountid`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
