import { businessService, categoryService } from '../services/businessService';
import { sampleBusinesses, sampleCategories } from '../data/seedData';

// Seed database with sample data
export const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Add categories first
    console.log('📁 Adding categories...');
    for (const category of sampleCategories) {
      try {
        const categoryId = await categoryService.addCategory(category);
        console.log(`✅ Added category: ${category.name} (ID: ${categoryId})`);
      } catch (error) {
        console.error(`❌ Error adding category ${category.name}:`, error);
      }
    }

    // Add businesses
    console.log('🏢 Adding businesses...');
    for (const business of sampleBusinesses) {
      try {
        const businessId = await businessService.addBusiness(business);
        console.log(`✅ Added business: ${business.name} (ID: ${businessId})`);
      } catch (error) {
        console.error(`❌ Error adding business ${business.name}:`, error);
      }
    }

    console.log('🎉 Database seeding completed!');
    return true;
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    return false;
  }
};

// Clear all data (use with caution!)
export const clearDatabase = async () => {
  try {
    console.log('🧹 Clearing database...');
    
    // This would require implementing delete functions
    // For now, just log the action
    console.log('⚠️  Clear function not implemented yet');
    
    return true;
  } catch (error) {
    console.error('❌ Error clearing database:', error);
    return false;
  }
};

// Check if database is empty
export const isDatabaseEmpty = async () => {
  try {
    const businesses = await businessService.getAllBusinesses();
    const categories = await categoryService.getAllCategories();
    
    return businesses.length === 0 && categories.length === 0;
  } catch (error) {
    console.error('❌ Error checking database:', error);
    return true; // Assume empty if error
  }
};
