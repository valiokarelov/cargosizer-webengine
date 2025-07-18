'use client';

import { useState } from 'react';
import { Package } from '@/types/cargo';

interface NewPackageForm {
  name: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  quantity: number;
}

export default function PackageManager() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [newPackage, setNewPackage] = useState<NewPackageForm>({
    name: '',
    length: 0,
    width: 0,
    height: 0,
    weight: 0,
    quantity: 1,
  });

  const addPackage = () => {
    if (!newPackage.name || !newPackage.length || !newPackage.width || !newPackage.height || !newPackage.weight) {
      alert('Please fill all fields');
      return;
    }

    const packageItem: Package = {
      id: Date.now().toString(),
      name: newPackage.name,
      dimensions: {
        length: newPackage.length,
        width: newPackage.width,
        height: newPackage.height,
      },
      weight: newPackage.weight,
      quantity: newPackage.quantity,
    };

    setPackages([...packages, packageItem]);
    setNewPackage({
      name: '',
      length: 0,
      width: 0,
      height: 0,
      weight: 0,
      quantity: 1,
    });
  };

  const removePackage = (id: string) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📦 Package Manager</h2>
      
      {/* Package Form */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Package Name"
          value={newPackage.name}
          onChange={(e) => setNewPackage({...newPackage, name: e.target.value})}
          className="border rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newPackage.quantity || ''}
          onChange={(e) => setNewPackage({...newPackage, quantity: parseInt(e.target.value) || 1})}
          className="border rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
          min="1"
        />
        <input
          type="number"
          placeholder="Length (inches)"
          value={newPackage.length || ''}
          onChange={(e) => setNewPackage({...newPackage, length: parseFloat(e.target.value) || 0})}
          className="border rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
          min="0"
          step="0.1"
        />
        <input
          type="number"
          placeholder="Width (inches)"
          value={newPackage.width || ''}
          onChange={(e) => setNewPackage({...newPackage, width: parseFloat(e.target.value) || 0})}
          className="border rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
          min="0"
          step="0.1"
        />
        <input
          type="number"
          placeholder="Height (inches)"
          value={newPackage.height || ''}
          onChange={(e) => setNewPackage({...newPackage, height: parseFloat(e.target.value) || 0})}
          className="border rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
          min="0"
          step="0.1"
        />
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={newPackage.weight || ''}
          onChange={(e) => setNewPackage({...newPackage, weight: parseFloat(e.target.value) || 0})}
          className="border rounded px-3 py-2 focus:border-blue-500 focus:outline-none"
          min="0"
          step="0.1"
        />
      </div>
      
      <button
        onClick={addPackage}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors mb-6"
      >
        Add Package
      </button>

      {/* Package List */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Packages ({packages.length})</h3>
        {packages.length === 0 ? (
          <p className="text-gray-500 italic">No packages added yet</p>
        ) : (
          packages.map((pkg) => (
            <div key={pkg.id} className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{pkg.name}</span>
                  <span className="text-gray-500 ml-2">(×{pkg.quantity})</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    {pkg.dimensions.length}&quot; × {pkg.dimensions.width}&quot; × {pkg.dimensions.height}&quot;
                  </div>
                  <button
                    onClick={() => removePackage(pkg.id)}
                    className="text-red-500 hover:text-red-700 px-2 py-1 rounded text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}