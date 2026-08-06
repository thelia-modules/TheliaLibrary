
# This is a fix for InnoDB in MySQL >= 4.1.x
# It "suspends judgement" for fkey relationships until are tables are set.
SET FOREIGN_KEY_CHECKS = 0;

-- ---------------------------------------------------------------------
-- library_image: file metadata, accessibility text and timestamps
--
-- `file_name` moves from the translation table to the image itself: a stored
-- file is not a translation of anything, and reading it through the visitor
-- locale returned nothing for an image uploaded in another language. The names
-- already stored are carried over by TheliaLibrary::update(), which can check
-- whether the legacy column is still there; the column itself is left in
-- place so this file stays replayable.
-- ---------------------------------------------------------------------

ALTER TABLE `library_image` ADD `file_name` VARCHAR(255) NULL;
ALTER TABLE `library_image` ADD `mime_type` VARCHAR(100) NULL;
ALTER TABLE `library_image` ADD `width` INTEGER NULL;
ALTER TABLE `library_image` ADD `height` INTEGER NULL;
ALTER TABLE `library_image` ADD `file_size` INTEGER NULL;
ALTER TABLE `library_image` ADD `decorative` TINYINT DEFAULT 0;
ALTER TABLE `library_image` ADD `created_at` TIMESTAMP NULL;
ALTER TABLE `library_image` ADD `updated_at` TIMESTAMP NULL;

ALTER TABLE `library_image_i18n` ADD `alt` VARCHAR(255) NULL;
ALTER TABLE `library_image_i18n` ADD `caption` TEXT NULL;

# This restores the fkey checks, after having unset them earlier
SET FOREIGN_KEY_CHECKS = 1;
