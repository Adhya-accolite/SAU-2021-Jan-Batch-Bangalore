package com.acc.library;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class BookHandler {

	private static SessionFactory factory;

	public static void main(String[] args) {
		try {
			factory = new Configuration().configure().buildSessionFactory();
		} catch (Exception e) {
			System.err.println(e);
		}
		BookHandler booksData = new BookHandler();
		//booksData.addBooktoLibrary("Living Being", "Thoms", 2000);
		//booksData.addBooktoLibrary("Electromagnet", "John", 2002);
		//booksData.addBooktoLibrary("Let Us C", "Kanetkar", 1987);
		//booksData.addBooktoLibrary("Patterns of software", "Richard", 1999);
		//booksData.addBooktoLibrary("The Java Programming language", "James Gosling", 2000);
		//booksData.getBookById(5);
		//booksData.getBooks();
		//booksData.updateBookByTitle("Living Being");
		//booksData.updateBookById(2);
		//booksData.deleteBookById(1);
		//System.out.println(booksData.getBookCount());
	}

	private void addBooktoLibrary(String title, String author, int pubYear) {

		Session session = factory.openSession();
		Transaction trans = null;
		
		try {
			trans = session.beginTransaction();
			Book book = new Book(title, author, pubYear);
			session.save(book);
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}

	}

	private void getBookById(int i) {
		Session session = factory.openSession();
		Transaction trans = null;
		try {
			System.out.println("Id filter");
			trans = session.beginTransaction();
			Book book = session.get(Book.class, i);

			System.out.println(book.getId() + " " + book.getTitle() + " " + book.getAuthor() + " " + book.getPubYear());
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}

	}

	private void getBooks() {
		Session session = factory.openSession();
		Transaction trans = null;
		try {
			System.out.println("Available Books");
			trans = session.beginTransaction();
			List<Book> books = session.createQuery("FROM Book").list();
			for (Book result : books) {
				System.out.print(result.getId() + " ");
				System.out.print(result.getTitle() + " ");
				System.out.print(result.getAuthor() + " ");
				System.out.print(result.getPubYear() + " ");

			}
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}

	}

	private void updateBookByTitle(String title) {
		Session session = factory.openSession();
		Transaction trans = null;
		try {
			trans = session.beginTransaction();
			Book book = session.get(Book.class, title);
			book.setAuthor("Thompson");
			book.setPubYear(2001);
			session.update(book);
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}
	}

	private void updateBookById(int i) {
		Session session = factory.openSession();
		Transaction trans = null;
		try {
			trans = session.beginTransaction();
			Book book = session.get(Book.class, i);
			book.setTitle("The Art of computer");

			session.update(book);
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}
	}

	private void deleteBookById(int i) {
		Session session = factory.openSession();
		Transaction trans = null;
		try {
			trans = session.beginTransaction();
			Book book = session.get(Book.class, i);
			session.remove(book);
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}
	}

	private int getBookCount() {
		Session session = factory.openSession();
		Transaction trans = null;
		int count = 0;
		try {
			System.out.println("No of Books");
			trans = session.beginTransaction();
			List<Book> books = session.createQuery("FROM Book").list();
			count = books.size();
			trans.commit();
		} catch (Exception e) {
			e.printStackTrace();
			if (trans != null)
				trans.rollback();
		} finally {
			session.close();
		}
		return count;
	}

}
