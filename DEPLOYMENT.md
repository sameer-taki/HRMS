# Deployment Guide for Fiji HRMS

## Prerequisites

1. Node.js (v18 or later)
2. PostgreSQL database
3. Vercel account (recommended) or any other hosting platform

## Environment Variables

Ensure all environment variables are properly set in your deployment platform:

```env
DATABASE_URL=your_postgresql_connection_string
APP_URL=your_application_url
JWT_SECRET=your_jwt_secret
NEXTAUTH_URL=your_application_url
NEXTAUTH_SECRET=your_nextauth_secret
```

## Database Setup

1. Create a new PostgreSQL database for production
2. Update the `DATABASE_URL` in your environment variables
3. Run database migrations:
   ```bash
   npx prisma migrate deploy
   ```

## Deployment Options

### 1. Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy with these build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 2. Traditional Hosting

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Post-Deployment

1. Create an admin user:
   ```sql
   -- Connect to your database and run:
   INSERT INTO "User" (id, email, password, role)
   VALUES ('admin', 'admin@example.com', 'hashed_password', 'ADMIN');
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
   - Verify DATABASE_URL
   - Check database server status
   - Confirm network connectivity

2. Authentication issues:
   - Verify JWT_SECRET and NEXTAUTH secrets
   - Check user permissions
   - Validate session configuration

3. File upload problems:
   - Check storage permissions
   - Verify file size limits
   - Confirm supported file types