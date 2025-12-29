import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { Business, Category, Review } from '../types/business';
import { sampleBusinesses, sampleCategories } from '../data/seedData';

const BUSINESS_COLLECTION = 'businesses';
const CATEGORIES_COLLECTION = 'categories';
const REVIEWS_COLLECTION = 'reviews';

// Mock data for development
const useMockData = true; // Set to false when Firebase is configured

// Business Services
export const businessService = {
  // Get all businesses
  async getAllBusinesses(): Promise<Business[]> {
    if (useMockData) {
      return sampleBusinesses.map((business, index) => ({
        ...business,
        id: `mock-${index}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }));
    }

    try {
      const q = query(collection(db, BUSINESS_COLLECTION), orderBy('rating', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })) as Business[];
    } catch (error) {
      console.error('Error getting businesses:', error);
      return [];
    }
  },

  // Get business by ID
  async getBusinessById(id: string): Promise<Business | null> {
    if (useMockData) {
      const index = parseInt(id.replace('mock-', ''));
      if (!isNaN(index) && index >= 0 && index < sampleBusinesses.length) {
        const business = sampleBusinesses[index];
        return {
          ...business,
          id: id,
          createdAt: new Date(),
          updatedAt: new Date()
        };
      }
      return null;
    }

    try {
      const docRef = doc(db, BUSINESS_COLLECTION, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          updatedAt: data.updatedAt?.toDate()
        } as Business;
      }
      return null;
    } catch (error) {
      console.error('Error getting business:', error);
      return null;
    }
  },

  // Search businesses
  async searchBusinesses(params: {
    keyword?: string;
    category?: string;
    district?: string;
    limit?: number;
  }): Promise<Business[]> {
    if (useMockData) {
      let businesses = sampleBusinesses.map((business, index) => ({
        ...business,
        id: `mock-${index}`,
        createdAt: new Date(),
        updatedAt: new Date()
      }));

      // Filter by category
      if (params.category) {
        businesses = businesses.filter(b => b.category === params.category);
      }
      
      // Filter by district
      if (params.district) {
        businesses = businesses.filter(b => b.district === params.district);
      }
      
      // Filter by keyword
      if (params.keyword) {
        const keyword = params.keyword.toLowerCase();
        businesses = businesses.filter(b => 
          b.name.toLowerCase().includes(keyword) ||
          b.description.toLowerCase().includes(keyword) ||
          b.category.toLowerCase().includes(keyword)
        );
      }
      
      if (params.limit) {
        businesses = businesses.slice(0, params.limit);
      }
      
      return businesses;
    }

    try {
      let q = query(collection(db, BUSINESS_COLLECTION), orderBy('rating', 'desc'));
      
      if (params.category) {
        q = query(q, where('category', '==', params.category));
      }
      
      if (params.district) {
        q = query(q, where('district', '==', params.district));
      }
      
      if (params.limit) {
        q = query(q, limit(params.limit));
      }
      
      const querySnapshot = await getDocs(q);
      let businesses = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })) as Business[];
      
      // Filter by keyword (client-side)
      if (params.keyword) {
        const keyword = params.keyword.toLowerCase();
        businesses = businesses.filter(business => 
          business.name.toLowerCase().includes(keyword) ||
          business.description.toLowerCase().includes(keyword) ||
          business.category.toLowerCase().includes(keyword)
        );
      }
      
      return businesses;
    } catch (error) {
      console.error('Error searching businesses:', error);
      return [];
    }
  },

  // Get businesses by category
  async getBusinessesByCategory(categoryName: string): Promise<Business[]> {
    if (useMockData) {
      return sampleBusinesses
        .filter(b => b.category === categoryName)
        .map((business, index) => ({
          ...business,
          id: `mock-${index}`,
          createdAt: new Date(),
          updatedAt: new Date()
        }));
    }

    try {
      const q = query(
        collection(db, BUSINESS_COLLECTION), 
        where('category', '==', categoryName),
        orderBy('rating', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })) as Business[];
    } catch (error) {
      console.error('Error getting businesses by category:', error);
      return [];
    }
  },

  // Add new business
  async addBusiness(business: Omit<Business, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    if (useMockData) {
      console.log('Mock: Adding business:', business.name);
      return `mock-${Date.now()}`;
    }

    try {
      const docRef = await addDoc(collection(db, BUSINESS_COLLECTION), {
        ...business,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding business:', error);
      throw error;
    }
  },

  // Update business
  async updateBusiness(id: string, updates: Partial<Business>): Promise<void> {
    if (useMockData) {
      console.log('Mock: Updating business:', id, updates);
      return;
    }

    try {
      const docRef = doc(db, BUSINESS_COLLECTION, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating business:', error);
      throw error;
    }
  },

  // Delete business
  async deleteBusiness(id: string): Promise<void> {
    if (useMockData) {
      console.log('Mock: Deleting business:', id);
      return;
    }

    try {
      await deleteDoc(doc(db, BUSINESS_COLLECTION, id));
    } catch (error) {
      console.error('Error deleting business:', error);
      throw error;
    }
  }
};

// Category Services
export const categoryService = {
  // Get all categories
  async getAllCategories(): Promise<Category[]> {
    if (useMockData) {
      return sampleCategories.map((category, index) => ({
        ...category,
        id: `mock-${index}`
      }));
    }

    try {
      const querySnapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Category[];
    } catch (error) {
      console.error('Error getting categories:', error);
      return [];
    }
  },

  // Add category
  async addCategory(category: Omit<Category, 'id'>): Promise<string> {
    if (useMockData) {
      console.log('Mock: Adding category:', category.name);
      return `mock-${Date.now()}`;
    }

    try {
      const docRef = await addDoc(collection(db, CATEGORIES_COLLECTION), category);
      return docRef.id;
    } catch (error) {
      console.error('Error adding category:', error);
      throw error;
    }
  }
};

// Review Services
export const reviewService = {
  // Get reviews for a business
  async getBusinessReviews(businessId: string): Promise<Review[]> {
    if (useMockData) {
      // Return empty reviews for now
      return [];
    }

    try {
      const q = query(
        collection(db, REVIEWS_COLLECTION),
        where('businessId', '==', businessId),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      })) as Review[];
    } catch (error) {
      console.error('Error getting reviews:', error);
      return [];
    }
  },

  // Add review
  async addReview(review: Omit<Review, 'id' | 'createdAt'>): Promise<string> {
    if (useMockData) {
      console.log('Mock: Adding review for business:', review.businessId);
      return `mock-${Date.now()}`;
    }

    try {
      const docRef = await addDoc(collection(db, REVIEWS_COLLECTION), {
        ...review,
        createdAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  }
};
