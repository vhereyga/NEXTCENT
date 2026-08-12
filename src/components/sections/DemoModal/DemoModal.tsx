import React from 'react';
import { Modal } from '../../common/Modal/Modal';
import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { useForm } from '../../../hooks/useForm';
import { ApiService } from '../../../services/api';
import { DemoFormData } from '../../../types';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string, type?: 'success' | 'error') => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const { values, errors, isSubmitting, serverError, handleChange, handleSubmit, reset } =
    useForm<DemoFormData>({
      initialValues: {
        fullName: '',
        email: '',
        organizationName: '',
        organizationSize: '1-50 members',
        message: '',
      },
      validate: (v) => {
        const errs: Record<string, string> = {};
        if (!v.fullName.trim()) errs.fullName = 'Full Name is required';
        if (!v.email.trim() || !v.email.includes('@')) errs.email = 'Valid Email is required';
        if (!v.organizationName.trim()) errs.organizationName = 'Organization Name is required';
        return errs;
      },
      onSubmit: async (formValues) => {
        const res = await ApiService.submitDemoRequest(formValues);
        if (res.success) {
          onShowToast(res.message, 'success');
          reset();
          onClose();
        } else {
          onShowToast(res.message, 'error');
        }
      },
    });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Personalized Demo">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {serverError && (
          <div style={{ color: 'var(--color-error)', fontSize: '14px' }}>{serverError}</div>
        )}
        <Input
          label="Full Name *"
          name="fullName"
          placeholder="e.g. Alex Morgan"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <Input
          label="Work Email Address *"
          name="email"
          type="email"
          placeholder="alex@organization.org"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          label="Organization Name *"
          name="organizationName"
          placeholder="e.g. National Badminton Association"
          value={values.organizationName}
          onChange={handleChange}
          error={errors.organizationName}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label htmlFor="organizationSize" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-neutral-dark)' }}>
            Organization Size
          </label>
          <select
            id="organizationSize"
            name="organizationSize"
            value={values.organizationSize}
            onChange={handleChange}
            style={{
              padding: '10px 14px',
              backgroundColor: 'var(--color-silver)',
              border: '1px solid transparent',
              borderRadius: 'var(--radius-sm)',
              fontSize: '14px',
            }}
          >
            <option value="1-50 members">1-50 members</option>
            <option value="51-500 members">51-500 members</option>
            <option value="500-2,500 members">500-2,500 members</option>
            <option value="2,500+ members">2,500+ members</option>
          </select>
        </div>
        <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" isLoading={isSubmitting}>
            Submit Request
          </Button>
        </div>
      </form>
    </Modal>
  );
};
