
# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- library_image
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `library_image`;

CREATE TABLE `library_image`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- library_item_image
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `library_item_image`;

CREATE TABLE `library_item_image`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_id` INTEGER,
    `item_type` VARCHAR(255),
    `item_id` INTEGER,
    `code` VARCHAR(255),
    `visible` TINYINT,
    `position` INTEGER,
    PRIMARY KEY (`id`),
    INDEX `library_item_image_item_index` (`item_type`, `item_id`),
    INDEX `fi_library_item_image_image_id` (`image_id`),
    CONSTRAINT `fk_library_item_image_image_id`
        FOREIGN KEY (`image_id`)
        REFERENCES `library_image` (`id`)
        ON UPDATE RESTRICT
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- library_tag
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `library_tag`;

CREATE TABLE `library_tag`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `color_code` VARCHAR(255),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- library_image_tag
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `library_image_tag`;

CREATE TABLE `library_image_tag`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image_id` INTEGER,
    `tag_id` INTEGER,
    PRIMARY KEY (`id`),
    INDEX `fi_library_image_tag_image_id` (`image_id`),
    INDEX `fi_library_image_tag_tag_id` (`tag_id`),
    CONSTRAINT `fk_library_image_tag_image_id`
        FOREIGN KEY (`image_id`)
        REFERENCES `library_image` (`id`)
        ON UPDATE RESTRICT
        ON DELETE CASCADE,
    CONSTRAINT `fk_library_image_tag_tag_id`
        FOREIGN KEY (`tag_id`)
        REFERENCES `library_tag` (`id`)
        ON UPDATE RESTRICT
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- library_image_i18n
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `library_image_i18n`;

CREATE TABLE `library_image_i18n`
(
    `id` INTEGER NOT NULL,
    `locale` VARCHAR(5) DEFAULT 'en_US' NOT NULL,
    `title` VARCHAR(255),
    `file_name` VARCHAR(255),
    PRIMARY KEY (`id`,`locale`),
    CONSTRAINT `library_image_i18n_fk_0228d9`
        FOREIGN KEY (`id`)
        REFERENCES `library_image` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------
-- library_tag_i18n
-- ---------------------------------------------------------------------

DROP TABLE IF EXISTS `library_tag_i18n`;

CREATE TABLE `library_tag_i18n`
(
    `id` INTEGER NOT NULL,
    `locale` VARCHAR(5) DEFAULT 'en_US' NOT NULL,
    `title` VARCHAR(255),
    PRIMARY KEY (`id`,`locale`),
    CONSTRAINT `library_tag_i18n_fk_b8e890`
        FOREIGN KEY (`id`)
        REFERENCES `library_tag` (`id`)
        ON DELETE CASCADE
) ENGINE=InnoDB;

# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;
