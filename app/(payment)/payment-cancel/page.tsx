import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'


 const PaymentCancelPage = () => {
  return (
    <div className='flex items-center justify-center'>
      <div>
        <h1 className="text-red-500">Your payment is cancel now</h1>
        <Link
          href="/dashboard/get-all-booking"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to My Bookings
        </Link>
      </div>
    </div>
  );
}

export default PaymentCancelPage
