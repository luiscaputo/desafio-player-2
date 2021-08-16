-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 16-Ago-2021 às 06:56
-- Versão do servidor: 5.7.26
-- versão do PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `desafioplayer2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `name` varchar(255) NOT NULL,
  `sector_id` int(11) NOT NULL,
  `industry_id` int(11) NOT NULL,
  `CNPJ` varchar(255) NOT NULL,
  `CNAE` varchar(255) NOT NULL,
  `titular_company` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `company`
--

INSERT INTO `company` (`name`, `sector_id`, `industry_id`, `CNPJ`, `CNAE`, `titular_company`, `created_at`, `updated_at`, `id`) VALUES
('LuisPaulelson', 4, 1, '19131243000197', '1234', 'teste', '2021-08-15 23:19:48.603657', '2021-08-15 23:19:48.603657', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `industry`
--

DROP TABLE IF EXISTS `industry`;
CREATE TABLE IF NOT EXISTS `industry` (
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `industry`
--

INSERT INTO `industry` (`name`, `description`, `created_at`, `updated_at`, `id`) VALUES
('Financeiro', 'Salvou no banco de dados', '2021-08-15 08:32:31.242085', '2021-08-15 08:32:31.242085', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sectories`
--

DROP TABLE IF EXISTS `sectories`;
CREATE TABLE IF NOT EXISTS `sectories` (
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sectories`
--

INSERT INTO `sectories` (`name`, `description`, `created_at`, `updated_at`, `id`) VALUES
('testeLK', 'Actualizado', '2021-08-15 08:30:26.538645', '2021-08-15 13:24:18.000000', 3),
('testeLK', 'Actualizado', '2021-08-15 12:25:18.495027', '2021-08-15 13:29:16.000000', 4),
('Economia', 'Salvou no banco de dados', '2021-08-15 12:36:28.310993', '2021-08-15 12:36:28.310993', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `created_at`, `updated_at`, `username`, `email`, `password`) VALUES
(1, '2021-08-16 00:57:39.717527', '2021-08-16 00:57:39.717527', 'LuisCaputo', 'luiscaputo15@gmail.com', '$2a$08$7qYaXPg8XSsSIn.wJSK9Qe8OHumelmNtRU8/owLMu6VeI51VbzdY2'),
(2, '2021-08-16 07:32:25.120729', '2021-08-16 07:32:25.120729', 'teste', 'teste@gmail.com', '$2a$08$AGedRdBFMslq/rNF7vsNA.PDCbvgxOUV4GwsHMi6qHShyKVmR0pYi');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
