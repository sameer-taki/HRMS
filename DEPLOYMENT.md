# Deployment Guide for Fiji HRMS

## Prerequisites

1. Node.js (v18 or later)
2. Database (SQLite for development, PostgreSQL for production)
3. Vercel account (recommended) or any other hosting platform

## Environment Variables

### Development (SQLite)
For local development, use these environment variables in your `.env` file:

```env
DATABASE_URL="file:./dev.db"
APP_URL="http://localhost:3000"
JWT_SECRET="your-jwt-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"
```

### Production (PostgreSQL)
For production deployment, update your environment variables:

```env
DATABASE_URL="postgresql://username:password@host:port/database"
APP_URL="your_application_url"
JWT_SECRET="your_jwt_secret"
NEXTAUTH_URL="your_application_url"
NEXTAUTH_SECRET="your_nextauth_secret"
```

## Database Setup

### Development Setup (SQLite)
1. Ensure your `.env` file has `DATABASE_URL="file:./dev.db"`
2. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

### Production Setup (PostgreSQL)
1. Update `prisma/schema.prisma` to use PostgreSQL:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
2. Create a new PostgreSQL database for production
3. Update the `DATABASE_URL` in your environment variables
4. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. **Important**: Update `prisma/schema.prisma` to use PostgreSQL before deployment
4. Configure environment variables in Vercel dashboard (use PostgreSQL connection string)
5. Deploy with these build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 2. Traditional Hosting

1. Update database provider to PostgreSQL in `prisma/schema.prisma`
2. Build the application:
   ```bash
   npm run build
   ```
3. Start the production server:
   ```bash
   npm start
   ```

## Database Migration Between SQLite and PostgreSQL

When moving from development (SQLite) to production (PostgreSQL):

1. Update `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"  // Change from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

2. Update your production `DATABASE_URL` to PostgreSQL connection string

3. Run migrations:
   ```bash
   npx prisma migrate deploy
   ```

## Post-Deployment

1. Create an admin user:
   ```sql
   -- Connect to your database and run:
   INSERT INTO "users" (id, email, password, role)
   VALUES ('admin', 'admin@example.com', 'hashed_password', 'admin');
   ```

2. Verify all features are working:
   - User authentication
   - Employee management
   - Attendance tracking
   - Leave management
   - Document uploads
   - Payroll processing

## Performance Optimization

1. Enable caching in `next.config.js`
2. Optimize images and static assets
3. Monitor database performance
4. Set up proper logging and monitoring

## Security Considerations

1. Enable HTTPS
2. Set secure headers
3. Implement rate limiting
4. Regular security audits
5. Keep dependencies updated

## Backup and Recovery

1. Set up automated database backups
2. Document recovery procedures
3. Test backup restoration periodically

## Maintenance

1. Monitor system resources
2. Schedule regular updates
3. Keep logs for troubleshooting
4. Plan for scalability

## Support

For issues and support:
1. Check application logs
2. Review database logs
3. Contact system administrator

## Troubleshooting

Common issues and solutions:

1. Database connection errors:
   - Verify DATABASE_URL format matches your database provider
   - Check database server status
   - Confirm network connectivity

2. Prisma schema engine errors:
   - Ensure DATABASE_URL matches the provider in schema.prisma
   - For SQLite: `DATABASE_URL="file:./dev.db"`
   - For PostgreSQL: `DATABASE_URL="postgresql://..."`

3. Authentication issues:
   - Verify JWT_SECRET and NEXTAUTH secrets
   - Check user permissions
   - Validate session configuration

4. File upload problems:
   - Check storage permissions
   - Verify file size limits
   - Confirm supported file types

5. OpenSSL warnings:
   - These are typically non-critical warnings
   - Ensure OpenSSL is installed on your system
   - Update Prisma to the latest version if issues persist