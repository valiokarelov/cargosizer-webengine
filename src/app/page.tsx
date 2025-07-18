import Layout from '@/components/layout/Layout';
import PackageManager from '@/components/cargo/PackageManager';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🚛 CargoSizer WebEngine</h2>
          <p className="text-gray-600 mb-8">
            Advanced 3D cargo optimization platform
          </p>
        </div>
        
        <PackageManager />
      </div>
    </Layout>
  );
}